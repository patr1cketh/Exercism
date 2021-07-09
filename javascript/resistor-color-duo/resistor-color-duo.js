//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([c1, c2]) => {
  const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

  let num1 = COLORS.indexOf(c1);
  let num2 = COLORS.indexOf(c2);
  return (num1 * 10) + (num2 * 1);
};
