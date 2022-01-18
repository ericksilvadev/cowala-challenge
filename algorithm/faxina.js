const faxina = (obj) => {
  Object.entries(obj).forEach(([key, value]) => (!value ? delete obj[key] : false));

  return obj;
};
