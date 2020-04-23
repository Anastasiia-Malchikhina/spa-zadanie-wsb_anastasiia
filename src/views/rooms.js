import $ from 'jquery';
import { roomsList } from './rooms-list';
import {
  homeRooms
} from './rooms-list';
export const rooms = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2 class="main-heading">Rooms</h2>')
    .append(homeRooms());

  return fragment;
};
