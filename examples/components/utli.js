export const setData = data => {
  const obj = { name: [], value: [] };
  data.map(item => {
    obj.name.push(item.name);
    obj.value.push(item.value);
  });
  return obj;
};
