export const mmdd = (dateStr: string) => {
  const date = new Date(dateStr);

  const m = String(date.getUTCMonth() + 1).padStart(2, "0");
  const d = String(date.getUTCDate()).padStart(2, "0");

  return `${m}.${d}`;
};
