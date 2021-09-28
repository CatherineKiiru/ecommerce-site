const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } = require("../constants/productConstants");

export const productListReducer = (
    state = { loading: true, products: [] }, 
    action
) =>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { Loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { Loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}