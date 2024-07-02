import React from 'react'

export default function RemoveTable({data}) {
  const removeItems = data;
    
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>
              Fruit Name
            </th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {removeItems.map((item,index)=>
          <tr key={index}>
            <td>{item.fruitName}</td>
            <td>{item.quantity}</td>
            <td>{item.rate}</td>
            <td>{item.total}</td>
            
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
