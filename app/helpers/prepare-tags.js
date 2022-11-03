import { helper } from '@ember/component/helper';

export function prepareTags(params/*, hash*/) {
  
  if (!params[0]) {
    return params;
  } 

  let tags = params[0].copy();
  const length = tags.length;
  for (let i = 0; i < length-1; i++) {
    tags[i] = "#" + tags[i] + ",";
  }
  tags[length-1] = "#" + tags[length-1];
  return tags;
}

export default helper(prepareTags);
