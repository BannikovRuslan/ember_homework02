import { helper } from '@ember/component/helper';

export function prepareTags(params/*, hash*/) {
  
  if (!params[0]) {
    return params;
  } 
  const length = params[0].length;
  for (let i = 0; i < length-1; i++) {
    params[0][i] = "#" + params[0][i] + ",";
  }
  params[0][length-1] = "#" + params[0][length-1];
  return params[0];
}

export default helper(prepareTags);
