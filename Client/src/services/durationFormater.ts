// returns duration from ms to mm:ss

const durationFormater = (duration: number | undefined) => {
  if (!duration) return;
  let duration_M = Math.floor(duration / 1000 / 60)
    .toString()
    .padStart(2, "0");
  let duration_s = Math.floor(Math.floor(duration / 1000) % 60)
    .toString()
    .padStart(2, "0");

  return `${duration_M}:${duration_s}`;
};

export default durationFormater;
