export function truncate(value, maxSize) {
  if(value.length > maxSize) {
    return value.substring(0, maxSize) +"...";
  }
  return value;
}
