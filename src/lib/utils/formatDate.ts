const year_day_formatter = new Intl.DateTimeFormat("en-CA"); // 2026-1-1
const year_month_formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
}); // Jan 26

const year_month__day_formatter = new Intl.DateTimeFormat("en-US", {
  // May 4, 2026
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function year_month__day_formatDate(date: Temporal.PlainDate): string {
  return year_month__day_formatter.format(date);
}

export function year_day_formatDate(date: Temporal.PlainDate): string {
  return year_day_formatter.format(date);
}

export function year_month_formatDate(date: Temporal.PlainDate): string {
  return year_month_formatter.format(date);
}
