const formatter = new Intl.DateTimeFormat('en-CA');

export default function formatDate(date: Date): string {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid Date';
    }
    return formatter.format(date);
}