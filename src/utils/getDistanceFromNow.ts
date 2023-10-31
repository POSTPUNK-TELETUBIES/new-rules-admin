import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

const defaultOptionsgetDistanceFromNow = { addSufix: true, locale: es }

export const getDistanceFromNow = (
  targetDate: string | Date | number,
  options = defaultOptionsgetDistanceFromNow,
) => formatDistance(new Date(targetDate), new Date(), options)
