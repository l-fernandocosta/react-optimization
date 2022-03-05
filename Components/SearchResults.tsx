import { useMemo } from "react";
import {ProductItem} from "./ProductItem";

interface ProductsProps {
  results: Array<{
    price: number, 
    id: number,
    title: string,
    priceFormatted: string,
  }>
  totalPrice: number, 
  onAddWishList: (id: number) => void,

}


export default function SearchResults({results, onAddWishList, totalPrice} : ProductsProps) {
 
  return (
    <div>
      <h2>Total {totalPrice}</h2>
      {results.map((product : any) => {
        return (
          <ProductItem
            product={product}
            key={product.id}
            onAddWishList = {onAddWishList}
          />
        );
      })}
    </div>
  )
}