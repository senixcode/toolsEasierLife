import moment from 'moment'

const formated = 'YYYY-MM-DD'
export const formatDate = (date?: string) => moment(date).format(formated)


