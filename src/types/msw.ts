import { DefaultBodyType, PathParams, ResponseResolver } from 'msw'

type HttpRequestResolverExtras<Params extends PathParams> = {
  params: Params
  cookies: Record<string, string>
}

export type ResponseResolverMSW = ResponseResolver<
  HttpRequestResolverExtras<PathParams>,
  DefaultBodyType,
  undefined
>
