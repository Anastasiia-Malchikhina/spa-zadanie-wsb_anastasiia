import $ from 'jquery';
import Cookies from 'js-cookie';
import seaViewIcon from '../img/sea.png';
import guestIconImg from '../img/user.png';
import priceIconImg from '../img/tag.png';
export const roomsListItem = (room) => {
    const li = $('<li class="list-group-item"></li>');
    li.text(room.name);
    return li;
};

export const roomsInfo = (room) => {
    const divInfoRooms = $('<div class="room-desc breadcrumb"></div>');
    const idRoom = $(`<span class="room-desc__id"></span>`);
    const imageRoom = $(`<img href="" class="room-desc__img">`);
    const nameRoom = $(`<h3 class="room-desc__title"></h3>`);
    const guestsRoom = $('<p class="room-desc__guests"></p>');
    const guestIcon = $(`<span><img class="guest-icon icon" src="${guestIconImg}">Guests: </span>`)
    const priceRoom = $('<h6 class="room-desc__price"></h6>');
    const priceIcon = $(`<span><img class="price-icon icon" src="${priceIconImg}">Price: </span>`)
    const descRoom = $("<p class='room-desc__text'></p>");
    const seaViewRoom = $('<span class="room-desc__sea-view">x</span>');
    const seeViewIcon = $(`<span><img class="sea-view-icon icon" src="${seaViewIcon}">Sea view: </span>`)
    const addRoom = $(`<a data-id=""class="room-desc__add-room">Add room</a>`);

    /*DATE */
    var today = new Date().toISOString().split('T')[0];
    var date = new Date();
    var tomorrow =  new Date(date.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const startData = $(`<label class="room-desc__date-label alert alert-secondary"> Check in <input class="form-control" type="date" id="start" min="${today}" value="${today}"></label>`);
    const endData = $(`<label class="room-desc__date-label alert alert-secondary"> Check out <input class="form-control" type="date" id="end" min="${tomorrow}" value="${tomorrow}"></label>`);
    const rowData = $('<div class="room-desc__row"></div>');

    rowData.append(guestsRoom).append(seaViewRoom);
    /* end DATE */

    idRoom.text(room.id);
    nameRoom.text(room.name);
    guestsRoom.text(room.guests);
    priceRoom.text(room.price + 'zł');
    descRoom.text(room.desc);
    imageRoom.attr('src', room.image);

    if (room.seaView) {
        seaViewRoom.text('Yes');
    } else {
        seaViewRoom.text('No');
    }

    seaViewRoom.prepend(seeViewIcon);
    guestsRoom.prepend(guestIcon);
    priceRoom.prepend(priceIcon);

    addRoom.attr('data-id', room.id);
    divInfoRooms.addClass('room-' + room.id);
    divInfoRooms.append(imageRoom)
        .append(nameRoom)
        .append(rowData)
        .append(descRoom)
        .append(priceRoom)
        .append(startData)
        .append(endData)
        .append(addRoom);


    $(addRoom).on('click', function () {
        
            var startDate = new Date($(this).siblings('.room-desc__date-label').find('#start').val()).toISOString().split('T')[0];;
            var endDate = new Date($(this).siblings('.room-desc__date-label').find('#end').val()).toISOString().split('T')[0];;
            var date = new Date($(this).siblings('.room-desc__date-label').find('#start').val());
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var oneYearFromNow = new Date(year + 1, month, day).toISOString().split('T')[0];

            if(!(startDate >= endDate) && (endDate <= oneYearFromNow)) {
                const cookieValue = `${$(this).attr('data-id')} ${startDate} ${endDate}`
                Cookies.set('id-room-' + $(this).attr('data-id'), cookieValue);
                location.reload();

            } 
            else {
                window.alert("Invalid Date Range");
            }
         
    });

    return divInfoRooms;
};