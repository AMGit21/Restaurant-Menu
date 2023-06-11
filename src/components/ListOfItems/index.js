import React from 'react'
import Item from "../Item";
import './listOfItems.css';

function ListOfItems(props) {
  return (
    <div className='listOfItems'>
      {props.itemName.map((item) => (
        <div key={item.itemId}>
          <Item imgSrc={require(`../../assets/imgs/${props.categoryName}/${item.img}`)} alt={item.alt} name={item.name} price={item.price} ingredients={item.ingredients}/>
        </div>
      ))}
    </div>
  )
}

export default ListOfItems;