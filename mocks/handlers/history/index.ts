import { http } from 'msw'
import { handleHistoryRequest } from './resolvers'
import { resolvePath } from '../utils/resolvePathHOF'

export const getHistoryHandlers = (basePath: string = 'history')=>{
  const mergePath = (path: unknown = '') => resolvePath(basePath, path)

  return[
    http.get(mergePath(), handleHistoryRequest)
  ]
}
