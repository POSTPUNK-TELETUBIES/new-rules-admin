export interface MswArguments {
  request: Response
  params: Record<string, string[] | string>
  cookies: Record<string, string>
}
