import { http } from 'msw'
import { getRules } from './resolvers'
import { resolvePath } from '../utils/resolvePathHOF'

export const getRulesHandlers = (basePath: string = 'rules')=>{
  const mergePath = (path: unknown = '') => resolvePath(basePath, path)

  return[
    http.get(mergePath(), getRules)
  ]
}
