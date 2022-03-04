import { memo } from "react"

interface ProductProps {
  product: {
    price: number,
    id: number,
    title: string,
  }
}


function ProductItemComponent({ product }: ProductProps) {
  return (
    <div >
      {product.title} - <strong>${product.price}</strong> {product.id}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})