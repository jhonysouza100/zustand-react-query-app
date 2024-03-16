import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import githubAPI from '../api/github'
import { Repository } from './types'

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey
  const {data} = await githubAPI.get<Repository[]>(`/users/${githubUser}/repos`)
  return data
}

export default function useFetchRepos(githubUser: string) {
  return useQuery({queryKey: ['repos', githubUser], queryFn: fetchRepos})
}