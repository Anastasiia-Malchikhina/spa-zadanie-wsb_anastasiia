import $ from 'jquery';
import Cookies from 'js-cookie';
export const treatmentsListItem = (treatment) => {
    const timeIcon = $(`<svg class="bi bi-stopwatch" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 15A6 6 0 108 3a6 6 0 000 12zm0 1A7 7 0 108 2a7 7 0 000 14z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M8 4.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4.5a.5.5 0 010-1h3V5a.5.5 0 01.5-.5zM5.5.5A.5.5 0 016 0h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
    <path d="M7 1h2v2H7V1z"/>
    </svg>`);

    const areaIcon = $(`<svg class="bi bi-droplet" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 01-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 005.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0010 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" clip-rule="evenodd"/>
  </svg>`);

    const priceIcon = $(`<svg class="bi bi-tag" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M.5 2A1.5 1.5 0 012 .5h4.586a1.5 1.5 0 011.06.44l7 7a1.5 1.5 0 010 2.12l-4.585 4.586a1.5 1.5 0 01-2.122 0l-7-7A1.5 1.5 0 01.5 6.586V2zM2 1.5a.5.5 0 00-.5.5v4.586a.5.5 0 00.146.353l7 7a.5.5 0 00.708 0l4.585-4.585a.5.5 0 000-.708l-7-7a.5.5 0 00-.353-.146H2z" clip-rule="evenodd"/>
    <path fill-rule="evenodd" d="M2.5 4.5a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"/>
  </svg>`);

    const treatmentDiv = $('<div class="treatment breadcrumb"></div>')
    const treatmentName = $(`<h5 class="treatment__name">${treatment.name}</h5>`);
    const treatmentImage = $(`<img src="${treatment.image}" class="treatment__image"> `);
    const treatmentArea = $(`<p class="treatment__area"> Area: ${treatment.area}</p>`);
    const treatmentTime = $(`<p class="treatment__time">Time: ${treatment.time}</p>`)
    const treatmentPrice = $(`<span class="treatment__price">Price: ${treatment.price} zł</span>`);

    treatmentTime.prepend(timeIcon);
    treatmentPrice.prepend(priceIcon);
    treatmentArea.prepend(areaIcon);
    const addTreament =  $(`<a data-id="" class="treatment__add ">Add Treatment</a>`);

    addTreament.attr('data-id', treatment.id);
    treatmentDiv.append(treatmentImage)
                .append(treatmentName)
                .append(treatmentArea)
                .append(treatmentTime)
                .append(treatmentPrice)
                .append(addTreament);


    $(addTreament).on('click', function () {
        
        Cookies.set('id-treatment-' + $(this).attr('data-id'), $(this).attr('data-id'));
        location.reload();
    });



    return treatmentDiv;
};
