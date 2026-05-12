export const mmdd = (dateStr: string) => {
  const date = new Date(dateStr);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${m}.${d}`;
};
