export function sortingDate(a, b) {
  const date1 = new Date(a.createdAt);
  const date2 = new Date(b.createdAt);

  return date1 - date2;
}
