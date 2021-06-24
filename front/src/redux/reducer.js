const initialState = {
    error: false,
    loading: true,
    products: [],
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case 'PRODUCTS_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'PRODUCTS_ERROR':
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;