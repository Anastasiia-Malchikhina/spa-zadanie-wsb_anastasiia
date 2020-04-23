import $ from 'jquery';
import { treatmentsList } from './treatments-list'

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>Treatments</h2>')
    .append(treatmentsList());

  return fragment;
};
