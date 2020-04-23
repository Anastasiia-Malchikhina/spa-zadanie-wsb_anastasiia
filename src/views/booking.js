import $ from 'jquery';
import Cookies from 'js-cookie';
import { roomsService } from '../common/rooms-service';
import priceIconImg from '../img/tag.png';
import { treatmentsService } from '../common/treatments-service';
export const booking = () => {
    const fragment = $(new DocumentFragment());
    const booking = $(`<div  class="booking container"><h2 class="main-heading">Checkout</h2></div>`);

    const cookiesRooms = Cookies.get('');

    for (var prop in cookiesRooms) {
      if (prop.includes("treatment")){
        var temp = new Array();
        var temp = cookiesRooms[prop].split(' ');
        treatmentsService.getTreatment(temp[0]).then(function (treatment) {
          const bookingCart = $('<div class="booking__room breadcrumb"></div>');
          const roomNameCart = $(`<div class="name-date">
                                    <svg class="bi bi-check-all" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                                    <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
                                    </svg>
                                    <h5 class="booking__treatment--name">${treatment.name} </h5>
                                </div>`);
          const roomPriceCart = $(`<span class="booking__room--price"><span><img class="price-icon icon" src="${priceIconImg}">Price: </span> ${treatment.price} zł 
          <a class="btn btn-dark treatment-remove-from-cart" href="#" data-id="${treatment.id}">X</a></span>`);
  
  
          bookingCart.append(roomNameCart)
          
            .append(roomPriceCart);
  
          booking.append(bookingCart);
          $('.treatment-remove-from-cart').unbind().on('click', function () {
            Cookies.remove('id-treatment-' + $(this).attr('data-id'));
            location.reload();
          });
        });
      }
      else {
        var temp = new Array();
        var temp = cookiesRooms[prop].split(' ');

        roomsService.getRoom(temp[0]).then(function (room) {

          const bookingCart = $('<div class="booking__room breadcrumb"></div>');
          const roomNameCart = $(`<div class="name-date">
                                    <svg class="bi bi-check-all" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                                    <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
                                    </svg>
                                    <h4 class="booking__room--name">${room.name} </h4>
                                </div>`);
          const roomPriceCart = $(`<span class="booking__room--price"><span><img class="price-icon icon" src="${priceIconImg}">Price: </span> ${room.price} zł 
          <a class="btn btn-dark remove-from-cart" href="#" data-id="${room.id}">X</a></span>`);
  
          roomNameCart.append(bookingRoomDate);
          bookingCart.append(roomNameCart)
          
            .append(roomPriceCart);
  
          booking.append(bookingCart);
          $('.remove-from-cart').unbind().on('click', function () {
            Cookies.remove('id-room-' + $(this).attr('data-id'));
            location.reload();
          });
        });
      }
      const bookingRoomDate = $(`<div class="booking-date">
      <span class=" badge badge-secondary booking-start">${temp[1]} </span>
      <span class="badge  badge-secondary booking-end">${temp[2]}</span>
      </div>`)

    }

      fragment.append(booking);
      return fragment;
    };