const LocalStorageDb = (isIncrease , id) => {
    
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    
    const quantity = shoppingCart[id];
    if (quantity) {
        let newQuantity;
        
       if(isIncrease){
            newQuantity = quantity + 1;
       }else{
            newQuantity = quantity - 1;
       }
       shoppingCart[id] = newQuantity;

    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
};

// load data from local storage

const getFromLocal = () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

export { LocalStorageDb, getFromLocal };

