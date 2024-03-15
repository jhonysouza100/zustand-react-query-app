import { useQuery } from '@tanstack/react-query'
import githubAPI from '../api/github'
import { Repository } from './types'

async function fetchRepos() {
  const {data} = await githubAPI.get<Repository[]>('/users/jhonysouza100/repos')
  return data
}

export default function useFetchRepos() {
  return useQuery({queryKey: ['repos'], queryFn: fetchRepos})
}