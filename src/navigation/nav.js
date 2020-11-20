import $ from 'jquery';
import {routeChange} from '../router/route-change';
import {routes} from '../router/routes';
import {navItem} from './nav-item';
import cartIcon from '../img/shopping-cart.png';
import Cookies from 'js-cookie';
import {itSpaCart} from '../cart/it-spa-cart';
import {roomsService} from '../common/rooms-service';
import { treatmentsService } from '../common/treatments-service';


export const nav = () => {
  const navbar = $(`
  <nav class="navbar navbar-expand-lg  navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto"></ul>
      </div>
    </div>
  </nav>
`);

  const navItems = routes.map(route => {
    const {
      name,
      path
    } = route;
    return navItem(name, () => navbar.trigger(routeChange, {
      path: path
    }));
  });

  navbar.find('ul').append(navItems);


  /* CART */
  const koszyk = $(`<div id="cart" class="cart">
  <img class="cart__icon" src="${cartIcon}">
  </div>`);

  const cookiesRooms = Cookies.get('');

  for (var prop in cookiesRooms) {

    if (prop.includes("treatment")){
      
      var temp = new Array();
      var temp = cookiesRooms[prop].split(' ');

      treatmentsService.getTreatment(temp[0]).then(function (treatment) {
        const treatmentInCart = $(`<div class="treatment-in-cart"></div>`)
        const treatmentInCart_Name = $(`<h5 class="treatment-in-cart__name">${treatment.name}</h5>`)
        const treatmentInCart_Price = $(`<h5 class="treatment-in-cart__price">- ${treatment.price} zł</h5>`)
        const removeCartTreatment = $(`<a class="remove-treatment-from-cart" href="#" data-id="${treatment.id}">X</a>`);
        const helpDiv = $("<div class='treatment-in-cart__wrapper'></div>");
        helpDiv.append(treatmentInCart_Price)
                .append(removeCartTreatment);
        treatmentInCart.append(treatmentInCart_Name).append(helpDiv);

        koszyk.append(treatmentInCart);
        $('.remove-treatment-from-cart').unbind().on('click', function () {
          Cookies.remove('id-treatment-' + $(this).attr('data-id'));
          location.reload();
        });
      });
      }

    else {
      var temp = new Array();
      var temp = cookiesRooms[prop].split(' ');
  
      roomsService.getRoom(temp[0]).then(function (room) {

        const roomInCart = $('<div class="cart__room"></div>');
        const roomNameCart = $(`<h4 class="cart__room--name">${room.name} </h4>`);
        const roomPriceCart = $(`<span class="cart__room--price"> - ${room.price} zł</span>`);
        const removeCartRoom = $(`<a class="remove-from-cart" href="#" data-id="${room.id}">X</a>`);
        const helpDiv = $("<div class='treatment-in-cart__wrapper'></div>");

        helpDiv.append(roomPriceCart)
                .append(removeCartRoom);
        roomInCart.append(roomNameCart)
          .append(bookingDate)

          .append(helpDiv);
  
        koszyk.append(roomInCart);
  
        /* open / close  cart */
        $(".cart__icon").unbind().click(function () {
          $("#cart").toggleClass('cart__open');
        });
        /*END */
  
        $('.remove-from-cart').unbind().on('click', function () {
          Cookies.remove('id-room-' + $(this).attr('data-id'));
          location.reload();
        });
      })
    }
  

    const bookingDate = $(`<div class="booking-date">
      <span class="booking-start">${temp[1]}</span>
      <span class="booking-end">${temp[2]}</span>
    </div>`)

  }
 
  navbar.append(koszyk);
  navbar.append(itSpaCart());
  return navbar;
};
