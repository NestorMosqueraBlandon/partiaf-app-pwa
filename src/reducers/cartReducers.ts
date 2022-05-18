export const cartReducer = (state:any = { cartItems: [] }, action:any) => {
    switch (action.type) {
      case 'CART_ADD_ITEM':
        const item = action.payload;
        const existItem:any = state.cartItems.find((x:any) => x.product === item.product);
        if (existItem) {
          return {
            ...state,
            error: '',
            cartItems: state.cartItems.map((x:any) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return { ...state, error: '', cartItems: [...state.cartItems, item] };
        }
      case 'CART_REMOVE_ITEM':
        return {
          ...state,
          error: '',
          cartItems: state.cartItems.filter((x:any) => x.product !== action.payload),
        };
      case 'CART_SAVE_SHIPPING_ADDRESS':
        return { ...state, shippingAddress: action.payload };
      case 'CART_SAVE_PAYMENT_METHOD':
        return { ...state, paymentMethod: action.payload };
      case 'CART_ADD_ITEM_FAIL':
        return { ...state, error: action.payload };
      case 'CART_EMPTY':
        return { ...state, error: '', cartItems: [] };
      default:
        return state;
    }
  };