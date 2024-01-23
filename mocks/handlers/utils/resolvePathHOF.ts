export const resolvePath = (basePath: string, path: unknown = '') => {
  if (path instanceof RegExp) throw new Error('regexp not supported yet')

  return basePath + path
}
