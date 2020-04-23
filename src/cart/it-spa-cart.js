import $ from 'jquery';
import { Cart } from "./cart";

export const itSpaCart = () => {
  const cart = new Cart();
  const fragment = $(new DocumentFragment());
  // const cookieStore = document.cookie;
  // const addRoom = $('<a href="#">Add room</a>');
  // cookieStore.addEventListener( (event) => {
  //     // jesli zaistniala zmiana w cookies,
  //     // ponownie pobieram zawartosc kosza
  //     const nowaZawartosc = cart.get();
  //     const basket = $('<div class="cart"></div>');
  //     basket.text(nowaZawartosc);
  //     fragment.append(basket);
  //     // ...i poprawiam wyswietlane przez kosz informacje
  //     // TODO: zaktualizuj to co wyswietla obecnie koszyk
  // });

   return fragment;
};