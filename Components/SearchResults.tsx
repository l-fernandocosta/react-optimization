import { useMemo } from "react";
import {ProductItem} from "./ProductItem";

interface ProductsProps {
  results: Array<{
    price: number, 
    id: number, 
    title: string
  }>,
  onAddWishList: (id: number) => void 
}


export default function SearchResults({results, onAddWishList} : ProductsProps) {
  const sumPriceProducts = useMemo(() => {
    return results.reduce((acc, product:any) => {
      return acc + product.price
    }, 0)
  }, [results])
  
  return (
    <div>
      <h2>Total {sumPriceProducts}</h2>
      {results.map((product) => {
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