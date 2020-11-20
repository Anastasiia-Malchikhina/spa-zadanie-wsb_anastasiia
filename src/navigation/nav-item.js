import $ from 'jquery';

export const navItem = (text, click) => {
  const navItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn btn-link text-light"></a>');
  anchor.text(text).on('click', click);

  document.crea

  navItem.append(anchor);

  return navItem;
};
