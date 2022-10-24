import { helper } from '@ember/component/helper';

export function getTagsString(params/*, hash*/) {
  let tags_array = params[0];
  let tags = "";
  if (tags_array.length === 0) return tags;

  tags = tags_array[0];
  for (let i = 1; i < tags_array.length; i++) {
    tags = tags + ", " + tags_array[i]  
  }
  return tags;
}

export default helper(getTagsString);
