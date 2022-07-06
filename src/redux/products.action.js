import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/17b517ab-06a2-443d-8449-bfa7f9284a51')
        .then((res) => res.data)
        .then((data) =>
            dispatch({
                type: 'PRODUCTS__SUCCESS',
                products: data.products,
            })
        )
}
