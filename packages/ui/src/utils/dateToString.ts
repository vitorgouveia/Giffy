import { format, parseISO } from 'date-fns'

export const dateToString = (date: string) => {
  return format(parseISO(date), "do MMM',' yyy")
}
