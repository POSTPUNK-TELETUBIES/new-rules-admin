import { formatDistance } from 'date-fns'
import { es } from 'date-fns/locale'

interface DistanceOptions {
  addSuffix: boolean
  locale: Locale
}

const defaultOptionsgetDateDifference: DistanceOptions = {
  addSuffix: true,
  locale: es,
}

export const getDateDifference = (
  targetDate: string | Date | number,
  compareDate: string | Date | number = new Date(),
  options = defaultOptionsgetDateDifference,
) => formatDistance(new Date(targetDate), new Date(compareDate), options)
