interface ProductProps {
product: {
  price: number, 
  id: number, 
  title: string, 
}
}


export default function ProductItem({product} : ProductProps) {
  return(
    <div >
      {product.title} - <strong>${product.price}</strong> {product.id}
    </div>
  )
}