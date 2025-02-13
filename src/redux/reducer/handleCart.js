const handleCart = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart
          .map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item))
          .filter((item) => item.qty > 0),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

      case "ADD_ORDER":
        return { ...state, orders: [...(state.orders || []), action.payload] } // Store orders properly
  

    default:
      return state;
  }
};

export default handleCart;


