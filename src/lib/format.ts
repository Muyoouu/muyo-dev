/*
 * Collection dates are calendar dates coerced to UTC midnight, so format in UTC.
 * Without it a build machine west of UTC renders the previous day.
 */
export const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
