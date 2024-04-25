 export const addDecimals = (num) => {
    return (Math.round(num * 100 ) / 100).toFixed(2);
 }   

 export const updateCart = (state) => {
    // calculate item price
    state.itemPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    state.itemsPrice = addDecimals(state.itemPrice);

    // calculate shipping price: if it is over 100 rupees then free, else 15 rupees for shipping
    state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 15);

    // calculate tax price (5% tax for fruits and vegetables in India)
    state.taxPrice = addDecimals(Number((0.18 * state.itemPrice).toFixed(2)));

    // calculate total price
    state.totalPrice = (
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));
    return state;
}
