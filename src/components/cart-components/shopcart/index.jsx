import React, { useState } from 'react'
import CartTable from '../carttable';

export default function ShopCart() {
    const [cart , setCart] = useState({
      fruitName:"",
      quantity: "",
      rate: "",
      total :0
    });
    const [listItems,setListItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    
    const handleUserInput =(e)=>{
      const{name,value}=e.target;
      setCart({...cart,[name]:value})
      
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
    }
    const handleAddRow = ()=>{
         const rowAmount = cart.quantity*cart.rate;
         const newTotal = listItems.reduce((accumulator,item)=> accumulator +item.total,0)+rowAmount;
         setTotalAmount(newTotal)
        setListItems([...listItems,{...cart ,total:rowAmount}])
        
        setCart({fruitName:"",
                quantity: "",
                rate: "",})

        }
        
        const clearAll =()=>{
          setListItems([])
          setTotalAmount(0)
        }
        
             
  return (
    <div>
      <form onSubmit={handleSubmit }>
       <input type='text' name='fruitName' value={cart.fruitName} onChange={handleUserInput} placeholder='fruit name'/>
       <input type='text' name='quantity' value={cart.quantity} onChange={handleUserInput} placeholder='quantity'/>
       <input type='text' name='rate' value={cart.rate} onChange={handleUserInput} placeholder='rate'/>
       <button type='submit' name='btn' onClick={handleAddRow}>add</button>
       <button type='button' onClick={clearAll}>clear</button>
       </form>
       <CartTable data = {listItems} grandTotal={totalAmount}/>
    </div>
  )
}
