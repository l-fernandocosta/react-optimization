import { memo, useState } from "react"
import { WishListModalProps } from "./AddWishListModal"
import dynamic from "next/dynamic"; 

const AddWishListModal = dynamic<WishListModalProps>(async () => { return import('./AddWishListModal') }
  , { loading: () => <span>Loading...</span> })

export interface ProductProps {
  product: {
    price: number,
    id: number,
    title: string,
    priceFormatted: number,
  },
  onAddWishList: (id: number) => void
}


function ProductItemComponent({ product, onAddWishList }: ProductProps) {
  
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    
    <div >
      {product.title} - <strong>${product.priceFormatted}</strong> {product.id}
      <button onClick={() => setIsOpenModal(true)}> Favoritar </button>
    
      {isOpenModal && (
        
        <AddWishListModal
          onAddToWishList={() => onAddWishList(product.id)}
          onRequestClose={() => setIsOpenModal(false)}
        />)
      }
    </div>
  

  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})