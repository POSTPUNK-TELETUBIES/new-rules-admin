import { PathParams } from "msw";

export const getPaginationParams = (pathParams: PathParams, defaultParams = {
  offset: 0,
  limit: 20
})=>({
  offset: Number(pathParams.offset ?? defaultParams.offset),
  limit: Number(pathParams.limit ?? defaultParams.limit)
})
