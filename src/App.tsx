import useFetchRepos from "./hooks/useRepos";

function App() {

  const {data, isLoading} = useFetchRepos()

  if(isLoading) return (<div>Loading...</div>)

  console.log(data)

  return (
    <div>
      {data && data.map( el => (<div>{el.name}</div>))}
    </div>
  );
}

export default App; 