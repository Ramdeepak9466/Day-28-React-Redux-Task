//File used to handle the reducer function for cart operations

//Set Count to 1 to buy atleast one item
const intialState = {
  count: 1,
};

const CartOpsReducer = (state = intialState, action) => {
  //Switch case to Add items to cart
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        count: state.count + 1,
      };
    //Switch case to Remove items from cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default CartOpsReducer;
