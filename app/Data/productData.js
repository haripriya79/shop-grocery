const products = [{
    id: 1,
    category: "Fruits",
    items: [{
        id: "1",
        name: "Fresh Strawberry",
        unit: "12 Pieces",
        price: 70,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/717aOT8kabL.AC_SL240_.jpg",
    },

    {
        id: "2",
        name: "Fresh Guava",
        unit: "500 g",
        price: 54,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41S4xXyjIzL.AC_SL240_.jpg",
    },
    {
        id: "3",
        name: "Fresh Sapota",
        unit: "250 g",
        price: 47,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51-4mzkIq9L.AC_SL240_.jpg",
    },
    {
        id: "4",
        name: "Fresh Pineapple",
        unit: "1 pc (Approx. 750 gm)",
        price: 102,
        discount: 36,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/81XA2GQIPOL.AC_SL240_.jpg",
    },
    {
        id: "5",
        name: "Fresh Amla",
        unit: "250 g",
        price: 40,
        discount: 10,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61Bf3niG9eL.AC_SL240_.jpg",
    }, {
        id: "6",
        name: "Fresh Orange",
        unit: "1 Kg - Nagpur",
        price: 119,
        discount: 42,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/617-C2IycLL.AC_SL240_.jpg",
    },

    ]
}, {
    id: 2,
    category: "Fresh Leaves",
    items: [{
        id: "1",
        name: "Dill Leaves",
        unit: "250g Bunch",
        price: 119,
        discount: 37,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/61GDPw-C8vL.AC_SL240_.jpg",
    },
    {
        id: "2",
        name: "Basil Leaves",
        unit: "50 g",
        price: 11,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51--85K2XEL.AC_SL240_.jpg",
    },
    {
        id: "3",
        name: "Lettuce, Romaine",
        unit: "50 g",
        price: 20,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/5133xwo82lL.AC_SL240_.jpg",
    },
    ]
}, {
    id: 3,
    category: "Vegetables",
    items: [{
        id: "1",
        name: "Tomato Hybrid",
        unit: "1 Kg ",
        price: 51,
        discount: 42,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/41KvVSV23dL.AC_SL240_.jpg",
    },
    {
        id: "2",
        name: "Fresh Cauliflower",
        unit: "1 piece, (400 - 600 g)",
        price: 54,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/81T2i55X4gL.AC_SL240_.jpg",
    },
    {
        id: "3",
        name: "Fresh Cabbage",
        unit: "1 Piece Pack (500gm-800gm)",
        price: 20,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51vl9RzME3L.AC_SL240_.jpg",
    },
    {
        id: "4",
        name: "Fresh Garlic",
        unit: "100 g",
        price: 20,
        discount: 36,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71KmgOL2q4L.AC_SL240_.jpg",
    },
    {
        id: "5",
        name: "Fresh Coriander",
        unit: "250 g",
        price: 16,
        discount: 10,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71aZ1MmtdjL.AC_SL240_.jpg",
    },
    {
        id: "6",
        name: "Carrot - Orange",
        unit: "500g Pack",
        price: 19,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/71S6oQqVa5L.AC_SL240_.jpg",
    },
    {
        id: "7",
        name: "Fresh Beet Root",
        unit: "250g Pack",
        price: 19,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/710TY8GGGqL.AC_SL240_.jpg",
    },
    {
        id: "8",
        name: "Fresh Bottle Gourd ",
        unit: "1 Piece",
        price: 20,
        discount: 0,
        discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51mSuAwCtkL.AC_SL240_.jpg",
    },
    ]
}

]

const getProducts = () => {
    return products;
}
const getProductById = (id) => {
    return products[id];
}
export { getProducts, getProductById }