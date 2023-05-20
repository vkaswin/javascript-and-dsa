export const createStore = <T extends object>(
  reducer: (state: T, action: any) => T,
  initialState: T
) => {
  let state = initialState;
  let callBackFn: Function | null = null;

  let dispatch = (action: any) => {
    let newState = reducer(state, action);
    if (state === newState) return;
    state = newState;
    if (callBackFn) callBackFn();
  };

  let subscribe = (cb: Function) => {
    callBackFn = cb;
  };

  let unsubscribe = () => (callBackFn = null);

  let getState = () => state;

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe,
  };
};

interface Product {
  _id: number;
  name: string;
  price: number;
}

type CartStore = {
  cart: Product[];
};

const initialState: CartStore = {
  cart: [],
};

type Action =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: Pick<Product, "_id"> };

const rootReducer = (
  state: CartStore,
  { type, payload }: Action
): CartStore => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(({ _id }) => _id !== payload._id),
      };
    default:
      return state;
  }
};

const store = createStore<CartStore>(rootReducer, initialState);

store.subscribe(() => {
  console.log("Listener called");
  console.log(store.getState());
});

console.log(store.getState()); // {}

store.dispatch({
  type: "ADD",
  payload: {
    _id: 1,
    name: "Iphone 13",
    price: 65000,
  },
});

store.unsubscribe();

store.dispatch({
  type: "ADD",
  payload: {
    _id: 2,
    name: "Sony TV",
    price: 65000,
  },
});

store.dispatch({
  type: "REMOVE",
  payload: {
    _id: 1,
  },
});

console.log(store.getState());
