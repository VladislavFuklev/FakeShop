export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTS__SUCCESS':
            return action.products

        default:
            return state
    }
}
