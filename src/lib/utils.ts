export function saveToLocalStorage(key: string, item: unknown) {
  const payload = JSON.stringify(item);
  localStorage.setItem(key, payload);
}

export function getFromLocalStorage(key: string) {
  const res = localStorage.getItem(key);
  if (res == null) return;
  return JSON.parse(res);
}

export function deleteFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
