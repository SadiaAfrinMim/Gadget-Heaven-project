import toast from "react-hot-toast";

const getStoredCartItems = () => {
  const addCardStr = localStorage.getItem('card-list');

 
  
  if(addCardStr){
    
    const storedCardData = JSON.parse(addCardStr);
    
    return storedCardData;
  }
  else{
    return [];
  }
};
// console.log('outer')

const setStoredCartItems = (id,name) => {
  
  const storedCard = getStoredCartItems();
  
  // Check if item already exists in the cart
  if (storedCard.includes(id)) {
    toast.error(`${name} is already in your cart!`);
    return;
  }
  
  storedCard.push(id);
  localStorage.setItem('card-list', JSON.stringify(storedCard));
  toast.success(`${name} successfully added!`);
};

  const removecard = (idx, name) => {
  const allReadyAddedCard = getStoredCartItems();
 
  const remaining = allReadyAddedCard.filter(id => id != idx); 
  localStorage.setItem('card-list', JSON.stringify(remaining)); 
  toast.success(`${name} successfully removed!`);
};


const getStoredWishList = ()=>{
  const addWishStr = localStorage.getItem('wish-list');
  console.log('addwishlist',addWishStr)
  if(addWishStr){
    const storedWishData = JSON.parse(addWishStr);
    
    
    return storedWishData;
  }
  else{

    return [];
  }

}
console.log('outer get from ls')


const setStoredWishList = (id, name)=>{
  const storedWish = getStoredWishList();
  

  if (storedWish.includes(id)) {
    toast.error(`${name} is already in your wishlist!`);
    return;
  }

  storedWish.push(id);
  localStorage.setItem('wish-list', JSON.stringify(storedWish));
  toast.success(`${name} successfully added!`);
}

const removeWish = (idx, name)=>{
  const allReadyAddedWish = getStoredWishList();
  const remaining = allReadyAddedWish.filter(id => JSON.parse(id) != idx);
  localStorage.setItem('wish-list', JSON.stringify(remaining));
  toast.success(`${name} successfully remove!!`)

}


export {
  setStoredCartItems,
  getStoredCartItems,
  removeWish ,
  removecard,
  getStoredWishList,
  setStoredWishList
};
