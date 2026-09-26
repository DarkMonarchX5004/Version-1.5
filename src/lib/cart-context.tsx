import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { products, type ProductId, type Weight } from "./products";

export interface CartItem {
  id: ProductId;
  weight: Weight;
  quantity: number;
}

type CartAction =
  | { type: "add"; id: ProductId; weight: Weight; quantity?: number }
  | { type: "change"; id: ProductId; weight: Weight; delta: number }
  | { type: "remove"; id: ProductId; weight: Weight }
  | { type: "hydrate"; items: CartItem[] }
  | { type: "clear" };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "hydrate":
      return action.items;
    case "clear":
      return [];
    case "remove":
      return state.filter((item) => item.id !== action.id || item.weight !== action.weight);
    case "add": {
      const quantityToAdd = action.quantity ?? 1;
      const match = state.find((item) => item.id === action.id && item.weight === action.weight);
      if (match) {
        return state.map((item) =>
          item === match ? { ...item, quantity: item.quantity + quantityToAdd } : item,
        );
      }
      return [...state, { id: action.id, weight: action.weight, quantity: quantityToAdd }];
    }
    case "change":
      return state
        .map((item) =>
          item.id === action.id && item.weight === action.weight
            ? { ...item, quantity: Math.max(0, item.quantity + action.delta) }
            : item,
        )
        .filter((item) => item.quantity > 0);
    default:
      return state;
  }
}

interface CartContextValue {
  cart: CartItem[];
  count: number;
  subtotal: number;
  add: (id: ProductId, weight: Weight, quantity?: number) => void;
  changeQuantity: (id: ProductId, weight: Weight, delta: number) => void;
  remove: (id: ProductId, weight: Weight) => void;
  clear: () => void;
  isBagOpen: boolean;
  setBagOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
  isB2BOpen: boolean;
  setB2BOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "canevia-bag";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [hydrated, setHydrated] = useState(false);
  const [isBagOpen, setBagOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [isB2BOpen, setB2BOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  // Hydrate from localStorage safely on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CartItem[];
        if (Array.isArray(parsed)) {
          dispatch({ type: "hydrate", items: parsed });
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, hydrated]);

  const count = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  const subtotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        const product = products[item.id];
        const price = product?.prices[item.weight] ?? 0;
        return total + price * item.quantity;
      }, 0),
    [cart],
  );

  const add = (id: ProductId, weight: Weight, quantity = 1) => {
    dispatch({ type: "add", id, weight, quantity });
    const product = products[id];
    toast.success(`${product.name} (${weight}) added to your reserve bag.`, {
      description: "Secured for private dispatch.",
    });
  };

  const changeQuantity = (id: ProductId, weight: Weight, delta: number) => {
    dispatch({ type: "change", id, weight, delta });
  };

  const remove = (id: ProductId, weight: Weight) => {
    dispatch({ type: "remove", id, weight });
    const product = products[id];
    toast.info(`${product.name} removed from bag.`);
  };

  const clear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        count,
        subtotal,
        add,
        changeQuantity,
        remove,
        clear,
        isBagOpen,
        setBagOpen,
        isCheckoutOpen,
        setCheckoutOpen,
        isB2BOpen,
        setB2BOpen,
        isSearchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
