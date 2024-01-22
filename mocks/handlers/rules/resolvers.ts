import { HttpResponse, HttpResponseResolver } from "msw"
import { DB_MOCK } from "../../database/db"
import { getPaginationParams } from '../utils/params'

export const getRules: HttpResponseResolver = ({params}) => {
  const {limit, offset} = getPaginationParams(params)

  const shouldUseCustomLimit = limit && offset

  const allRules = shouldUseCustomLimit
    ? DB_MOCK.rule.findMany({
        take: limit,
        skip: offset,
      })
    : DB_MOCK.rule.getAll()

  return HttpResponse.json({ rules: [...allRules] })
  }
