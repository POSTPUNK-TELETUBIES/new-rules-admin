import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date: string | number | Date) =>
  formatDistance(new Date(date), new Date(), { addSuffix: true, locale: es })
