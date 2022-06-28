export const productsLikeReducer = (
    state = {
        1: true,
        2: true,
    },
    action
) => {
    switch (action.type) {
        case 'LIKE':
            return {
                ...state,
                [action.id]: true,
            }

        case 'DISLIKE':
            return {
                ...state,
                [action.id]: false,
            }

            break

        default:
            return state
    }
}