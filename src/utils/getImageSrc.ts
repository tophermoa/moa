export function getImageSet(src: string) {
  return {
    thumb: src.replace("/assets/full/", "/assets/thumb/"),
    medium: src.replace("/assets/full/", "/assets/medium/"),
    full: src,
  };
}
