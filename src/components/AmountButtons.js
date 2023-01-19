import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='add-cart-container'>
      <button type='button' className='btn-count' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='btn-count' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButtons;