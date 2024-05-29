//unused but kept for later

const shortName = (text: string) => {
  if (text.length < 15) return text;
  return text.substring(0, 15) + "...";
};

export default shortName;
