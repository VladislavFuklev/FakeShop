const products = [
    {
        id: 1,
        name: 'iPhone XS',
        pricename: 'iPhone XS',
        description: 'This is iPhone XS',
        type: 'phone',
        capacity: 64,
        price: 500,
        image: 'images/iphone-red.jpeg',
    },
    {
        id: 2,
        name: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: 64,
        price: 1000,
        image: 'images/iphone-light-blue.jpeg',
    },
    {
        id: 3,
        name: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: 64,
        price: 1300,
        image: 'images/iphone-gray.jpeg',
    },
    {
        id: 4,
        name: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: 32,
        price: 700,
        image: 'images/iphone-red.jpeg',
    },
    {
        id: 5,
        name: 'iPhone XR',
        description: 'This is iPhone XR',
        type: 'phone',
        capacity: 128,
        price: 200,
        image: 'images/iphone-gray.jpeg',
    },
    {
        id: 6,
        name: 'iPhone 13 PRO MAX',
        description: 'This is iPhone PRO MAX',
        type: 'phone',
        capacity: 512,
        price: 2000,
        image: 'images/iphone-red.jpeg',
    },
]

export const getProductsObject = (array) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )

export default products
