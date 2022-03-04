import ProductItem from "./ProductItem";

interface ProductsProps {
  results: Array<{
    price: number, 
    id: number, 
    title: string
  }> 
}


export default function SearchResults({results} : ProductsProps) {
  return (
    <div>
      {results.map((product) => {
        return (
          <ProductItem product={product} key={product.id}/>
        );
      })}
    </div>
  )
}