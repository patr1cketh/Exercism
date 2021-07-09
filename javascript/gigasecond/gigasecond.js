//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  const gs = 1000000000; // 1 gigasecond = 1 billion seconds
  let inputTime = moment.getTime(); // number of milliseconds since moment
  let newDate = new Date(inputTime + (gs*1000)); // add on a gigasecond and create a new Date object
  return newDate; 
};
