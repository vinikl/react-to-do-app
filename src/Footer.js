import React from 'react'

function Footer({length}) {
  return (
    <footer>
        <p>{length} {length === 1 ? 'Item' : 'Items'}</p>
    </footer>
  )
}

export default Footer