type Severity =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'

export const getColorForType = (type: string): Severity => {
  switch (type) {
    case 'BUG':
      return 'error'
    case 'VULNERABILITY':
      return 'warning'
    case 'CODE_SMELL':
      return 'success'
    case 'SECURITY_HOTSPOT':
      return 'info'
    default:
      return 'inherit'
  }
}
