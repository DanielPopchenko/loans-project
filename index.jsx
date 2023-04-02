export const formatAmountToNumber = (value) => {

   return Number(value.replace(/,/g, ''));
}

export const countHours = (millisecs) => {
    const hours = (millisecs / (1000 * 60 * 60)).toFixed(0);
    const seconds = (millisecs / 1000).toFixed(0);
    const minutes = (millisecs / (1000 * 60)).toFixed(0);
    const days = (millisecs / (1000 * 60 * 60 * 24)).toFixed(0);
    
    if (seconds < 60) {
      return `${seconds}sec`;
        } else if (minutes < 60) {
            return `${minutes}min`;
        } else if (hours < 24) {
            return `${hours}hrs`;
        } else {
      return `${days}days`;
        }
}

export const formatAmountToString = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


