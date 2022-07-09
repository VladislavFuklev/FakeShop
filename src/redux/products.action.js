import axios from "axios"

export const fetchProducts = () => (dispatch) => {
    axios
        .get("https://run.mocky.io/v3/01bdfd0d-cc90-4220-9e34-11aaf1dffd76")
        .then((res) => res.data)
        .then((data) =>
            dispatch({
                type: "PRODUCTS__SUCCESS",
                products: data.products,
            })
        )
}


