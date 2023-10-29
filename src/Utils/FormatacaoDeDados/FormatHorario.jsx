export const FormatHorario = (value) => {
  const cleanedValue = value.replace(/[^0-9]/g, "");
  let formatedValue = "";

  for (let i = 0; i < cleanedValue.length; i++) {
    formatedValue += cleanedValue[i];
    console.log(i);
    if (i === 1) {
      formatedValue += ":";
    }
  }

  return formatedValue;
};
