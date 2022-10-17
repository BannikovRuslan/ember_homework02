import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getBookTags(params/*, hash*/) {
  
  let tags_array = params[0];
  let tags = "";
  if (tags_array.length === 0) return tags;

  tags = `<a href="#" class="tag-link"><span class="small">${tags_array[0]}</span></a>`;
  for (let i = 1; i < tags_array.length; i++) {
    tags = tags + `, <a href="#" class="tag-link"><span class="small">${tags_array[i]}</span></a>`;  
  }
  return htmlSafe(tags);
}

export default helper(getBookTags);
