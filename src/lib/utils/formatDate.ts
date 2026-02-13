const year_day_formatter = new Intl.DateTimeFormat('en-CA'); // 2026-1-1
const year_month_formatter = new Intl.DateTimeFormat('en-GB', { year: '2-digit', month: 'short' }); // Jan 26


export function year_day_formatDate(date: Date): string {
    return year_day_formatter.format(date);
}

export function year_month_formatDate(date: Date): string {
    return year_month_formatter.format(date);
}