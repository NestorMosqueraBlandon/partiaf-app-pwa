export const addToCart =
  (product: any, qty: any) => async (dispatch: any, getState: any) => {
    const {
      cart: { cartItems },
    } = getState();

    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        name: product.name,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        product: product._id,
        qty,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart =
  (productId: any) => (dispatch: any, getState: any) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: productId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
