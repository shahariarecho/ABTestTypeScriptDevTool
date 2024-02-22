export const selectors = {
  images: "div.image-text>div.image-text-wrapper>div.image>img",
};

export const imageUrlPrefix: string = "https://medianet.com/cro/fortis/fr007";

export const getImageUrl = (variation: string, index: number) => {
  return `${imageUrlPrefix}/${variation}-${index}.jpg`;
};
