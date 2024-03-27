
const TimeDiffCalculator = (CurrenDate,CreationDate) => {
  const timeDiff = Math.abs(CurrenDate - CreationDate);
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return seconds + "s";
  } else if (minutes < 60) {
    return minutes === 1 ? minutes + "min": minutes + "mins";
  } else if (hours < 24) {
    return  hours === 1 ? hours + "hr": hours + "hrs";
  } else if (days < 30) {
    return days + "d";
  } else if (months < 12) {
    return months + "m";
  } else {
    return years === 1 ? years + "yr": years + "yrs";
  }
}

export default TimeDiffCalculator