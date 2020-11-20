import $ from 'jquery';
import { Cart } from "./cart";

export const itSpaCart = () => {
  const cart = new Cart();
  const fragment = $(new DocumentFragment());
  return fragment;
};
