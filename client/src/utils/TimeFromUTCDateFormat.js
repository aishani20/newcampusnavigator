exports.timeExtracterFromUTC = (value) => {
    const date = new Date(value);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formatedTime = `${hours}:${minutes}:${seconds}`;
    return formatedTime;
}
