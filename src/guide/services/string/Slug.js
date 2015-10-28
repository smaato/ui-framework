
export function slugify(str) {
  const parts = str
  .toLowerCase()
  .replace(/[-]+/g, ' ')
  .replace(/[^\w^\s]+/g, '')
  .replace(/ +/g, ' ').split(' ');
  return parts.join('-');
}

export function slugifyEach(items, src, dest) {
  return items.map(item => {
    item[dest] = slugify(item[src]);
    return item;
  });
}
