import React from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'

function ItemList({items, handleCheck, handleDelete}) {
  return (
    <div>
        <ul>
            {items.map((item) => (
                <li className='item' key='item.id'>
                    <input
                        type='checkbox'
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked}
                    />
                    <label
                        style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                    <FaRegTimesCircle
                        onClick={() => handleDelete(item.id)}
                        role="button"
                        tabIndex="0"
                    />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList