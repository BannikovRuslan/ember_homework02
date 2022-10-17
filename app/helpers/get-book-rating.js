import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getBookRating(params/*, hash*/) {
  let rating = params[0];
  return htmlSafe(`<div class="progress-bar" role="progressbar" style="width: ${rating}%;" aria-valuenow="${rating}" aria-valuemin="0" aria-valuemax="100">${rating}%</div>`);
}

export default helper(getBookRating);
