function formatPhone(phone: string) {
  const arr = [];
  arr.push(phone.slice(0, 2)); // 62
  arr.push(phone.slice(2, 5)); // 821
  arr.push(phone.slice(5, 9)); // 1364
  arr.push(phone.slice(9)); // sisa

  return arr.join(" ");
}

export { formatPhone };
