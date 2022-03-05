
export interface WishListModalProps {
  onRequestClose: () => void,
  onAddToWishList: () => void, 
}


export default function AddWishListModal({
  onAddToWishList,
  onRequestClose
}:WishListModalProps) {
  return (
    <div>
      Deseja adicionar à lista de desejo ?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </div>
  )

}