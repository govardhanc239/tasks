import React, { useState } from 'react'
import RemoveTable from '../removetable';
//import CartItem from '../cartitems'

export default function CartTable({data ,grandTotal}) {  
  const [cartUpdate,setCartUpdate] =useState(data);
  const [removedTable,setRemovedTable] = useState([])  
console.log(cartUpdate);
const handleRemove = (index)=>{
  const updatedTable = [...cartUpdate];
  const removedItem = cartUpdate[index];
  setRemovedTable([...removedTable,removedItem])
  updatedTable.splice(index,1)
  setCartUpdate(updatedTable);
    
}
  return (
    <div>
       <table border={1}>
        <thead>
            <tr>
                <th>Fruit Name</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Total</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>
  
              <tr key={index}>
                <td>{item.fruitName}</td>
                <td>{item.quantity}</td>
                <td>{item.rate}</td>
                <td>{item.total}</td>
                <td><button type='button' onClick={()=>handleRemove(index)}>remove</button></td>

              </tr>
            )}
        </tbody>
        <tfoot>
          <h4>Grand Total :{grandTotal}</h4>
        </tfoot>
       </table>

        <RemoveTable data = {removedTable}/>
       
    </div>
  )
}
