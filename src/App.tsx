import Card from "./components/Card";
import useFetchRepos from "./hooks/useRepos";
import { useReposStore } from './store/reposStore'

function App() {

  // REACT-QUERY
  const {data, isLoading} = useFetchRepos('SebastianBordi')

  // ZUSTAND
  const { favoriteReposIds} = useReposStore()

  if(isLoading) return (<div>Loading...</div>)

  return (
    <>
      {data && data.map( el => (<div key={crypto.randomUUID()}>
        <Card repository={el}
        isFavorite={favoriteReposIds.includes(el.id)} />
      </div>))}
    </>
  );
}

export default App;