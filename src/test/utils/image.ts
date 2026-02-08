import { fireEvent } from "@testing-library/react";

export function triggerImageLoad(image: HTMLImageElement) {
  fireEvent.load(image);
}

export function triggerImageError(image: HTMLImageElement) {
  fireEvent.error(image);
}

export function setImageNaturalSize(
  image: HTMLImageElement,
  width: number,
  height: number
) {
  Object.defineProperty(image, "naturalWidth", {
    configurable: true,
    value: width,
  });
  Object.defineProperty(image, "naturalHeight", {
    configurable: true,
    value: height,
  });
}
