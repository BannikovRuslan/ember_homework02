import { helper } from '@ember/component/helper';

export function showObjectData(params/*, hash*/) {

  let [data, objectFieldsStr] = params;

  if (typeof data == 'undefined' || typeof data == 'undefined') {
    return "";
  }

  let objectFields = objectFieldsStr.split(',').map(function(objectField) {
    return objectField.trim();
  });

  if (objectFields.length == 0) {
      return "";
  } 

  let showStr = data.get(objectFields[0]);
  for (let i = 1; i < objectFields.length; i++) {
      showStr += " " + data.get(objectFields[i]);
  }
  return showStr;

}

export default helper(showObjectData);
