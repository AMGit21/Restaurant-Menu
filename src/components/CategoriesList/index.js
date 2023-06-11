import React from 'react'
import './CategoriesList.css'

function CategoriesList(props) {
  return (
    <div>
        <div>{ props.children }</div>
    </div>
  )
}

export default CategoriesList;
