var inititalState = [
    {
        id: 1,
        name: 'IPhone Xs',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S10',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863643187455627_ss-galaxy-s10-trang-1.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 900,
        inventory: 15, 
        rating: 5
    },
    {
        id: 3,
        name: 'Xiaomi Mi 9',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/5/7/636928415238970301_xiaomi-mi-9-xanh-1.png',
        description: 'Sản phẩm do Xiaomi sản xuất',
        price: 600,
        inventory: 16, 
        rating: 4
    }
];

const products = (state = inititalState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;