export function formatDateKo(dateStr: string): string {
  const [yearStr, monthStr, dayStr] = dateStr.split('-')
  return `${yearStr}년 ${Number(monthStr)}월 ${Number(dayStr)}일`
}
