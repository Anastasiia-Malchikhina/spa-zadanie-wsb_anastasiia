import $ from 'jquery';
import { treatmentsService } from '../common/treatments-service';
import { treatmentsListItem } from './treatments-list-item';

export const treatmentsList = () => {
  const ul = $('<div class="treatments container"><h2 class="main-heading">Treatments</h2></div>');

  // doczepia liste pokoi, gdy tylko przyjdzie z serwera
  treatmentsService.getTreatments()
    .then(treatments => treatments.map(treatment => treatmentsListItem(treatment)))
    .then(treatmentsListItems => ul.append(treatmentsListItems));

  return ul;
};
