import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestRequest,
} from 'msw'

export type RequestTypeMSW = RestRequest<never, PathParams<string>>
export type ResponseTypeMSW = ResponseComposition<DefaultBodyType>
