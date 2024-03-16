import { Repository } from "../hooks/types";
import { useReposStore } from '../store/reposStore'

type CardProps = {
  repository: Repository
  isFavorite: boolean
}

function Card({repository, isFavorite}: CardProps) {

  const addFavoriteRepo =  useReposStore(state => state.addFavoriteRepo)
  const removeFavoriteRepo =  useReposStore(state => state.removeFavoriteRepo)

  const handleLike = () => {
    if(isFavorite) {
      removeFavoriteRepo(repository.id)
      return 
    }

    addFavoriteRepo(repository.id)
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <button
        onClick={handleLike}
      >{isFavorite ? "dislike" : "like"}</button>
    </div>
  );
}

export default Card;