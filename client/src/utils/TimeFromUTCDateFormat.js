exports.timeExtracterFromUTC = (value) => {
  const date = new Date(value);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formatedTime = `${hours}:${minutes}`;
  return formatedTime;
};
