import { memo } from "react"

interface ProductProps {
  product: {
    price: number,
    id: number,
    title: string,
  },
  onAddWishList: (id: number) => void 
}


function ProductItemComponent({ product, onAddWishList}: ProductProps) {
  return (
    <div >
      {product.title} - <strong>${product.price}</strong> {product.id}
      <button onClick={() => onAddWishList(product.id)}>Wish List</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})