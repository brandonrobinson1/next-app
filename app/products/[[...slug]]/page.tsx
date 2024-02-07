import React from 'react'

interface Props {
 params: {slug: string[]}
 searchParams: {sortOrder: string;}   
}

const Products = ({params: { slug }, searchParams: {sortOrder}}: Props) => {
  return (
    <div>
      Products Page {slug} {sortOrder}
    </div>
  )
}

export default Products
