var inititalState = [
    {
        id: 1,
        name: 'IPhone 11 Pro',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10
    },
    {
        id: 2,
        name: 'Samsung Galaxy S10',
        image: '',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 900,
        inventory: 15
    },
    {
        id: 3,
        name: 'Xiaomi Mi 9',
        image: '',
        description: 'Sản phẩm do Xiaomi sản xuất',
        price: 600,
        inventory: 16
    }
];

const product = (state = inititalState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default product;