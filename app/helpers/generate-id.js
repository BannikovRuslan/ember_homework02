import { helper } from '@ember/component/helper';

export function generateId(params/*, hash*/) {
  let [prefix, num] = params

  if (typeof prefix == "undefined") {
    prefix = "";
  }

  if (typeof num == "undefined") {
    num = "";
  }

  let sep = " ";
  if ((prefix + num).length == 0) {
    sep = "";
  }
  
  return prefix + sep + num;
}

export default helper(generateId);
