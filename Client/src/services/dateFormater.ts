const dateFormater = (date: string | undefined) => {
  if (!date) return "0-0-0";
  const splitDate = date.split("-");
  const newDate = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];
  return newDate;
};

export default dateFormater;
