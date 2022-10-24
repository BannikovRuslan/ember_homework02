import { helper } from '@ember/component/helper';

export function getLocalFileName(params/*, hash*/) {
  let [relative_path] = params;
  let str_array = relative_path.split("/");
  return str_array[str_array.length - 1];
}

export default helper(getLocalFileName);
