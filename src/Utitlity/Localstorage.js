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
  storedCard.push(id);
  const storedCardList = JSON.stringify(storedCard);
  localStorage.setItem('card-list', storedCardList);
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
  
    storedWish.push(id);
    const storedWishList = JSON.stringify(storedWish);
    localStorage.setItem('wish-list', storedWishList);
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
