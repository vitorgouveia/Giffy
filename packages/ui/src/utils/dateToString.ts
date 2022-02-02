import { format, parseISO } from 'date-fns'

export const dateToString = (date: number) => {
  return format(parseISO(new Date(date).toISOString()), "do MMM',' yyy")
}
