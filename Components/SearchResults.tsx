import { List, ListRowRenderer } from "react-virtualized";
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
  
  const rowRenderer : ListRowRenderer = ({key, index, style, isScrolling, isVisible}) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddWishList={onAddWishList}
        />
      </div>
    )
  }



  return (
    <div>
      <h2>Total {totalPrice}</h2>
      <List
        width={900}
        height={200}
        rowCount={results.length}
        rowHeight={30}
        rowRenderer={rowRenderer}
        overscanRowCount={5}
        
      />

      

      {/* {results.map((product : any) => {
        // return (
        //   <ProductItem
        //     product={product}
        //     key={product.id}
        //     onAddWishList = {onAddWishList}
        //   />
        // );
      })} */}
    </div>
  )
}