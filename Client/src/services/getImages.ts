import { Image } from "../interfaces/Image";

const getImages = (imageArray: Image[]) => {
  return imageArray.find((image) => image.height === 300)?.url;
};

export default getImages;
