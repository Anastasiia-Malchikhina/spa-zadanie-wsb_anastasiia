import $ from 'jquery';
import imageURL from '../img/top-hero.jpg';
import { toggleCart } from './rooms-list-item';

export const home = () => {
  const fragment = $(new DocumentFragment());

  const homeTopDiv = $(`
    <div class="top-home">
      <img class="top-home__hero" src="${imageURL}">
      <h2 class="top-home__title">Lorem ipsum dolor sit amet dolor , <strong>consectetur adipiscing elit.</strong></h2>
      <a href="http://localhost:1234/rooms" class="top-home__button">Zobacz nasze apartamenty</a>
    </div>
  `);
  
  fragment.append(homeTopDiv);
  toggleCart;
  return fragment;

};

