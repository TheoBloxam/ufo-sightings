type DateFormat = 'short' | 'long'

export const formatDateToLocale = (
    date: Date,
    format: DateFormat
): string => {
    return date.toLocaleDateString('en-UK', {
        weekday: format,
        day: 'numeric',
        month: format,
        ...(format === 'long' && { year: 'numeric' })
    })
}
