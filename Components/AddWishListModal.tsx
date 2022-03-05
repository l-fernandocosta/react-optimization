
export interface WishListModalProps {
  onRequestClose: () => void,
  toWishList: () => void, 
}


export default function AddWishListModal({
  toWishList,
  onRequestClose
}:WishListModalProps) {
  return (
    <div>
      Deseja adicionar à lista de desejo ?
      <button onClick={toWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </div>
  )

}