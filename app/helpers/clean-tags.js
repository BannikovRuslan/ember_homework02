import { helper } from '@ember/component/helper';

export function cleanTags(params/*, hash*/) {
  
  const cleanTag = typeof params[0] == 'undefined'? '':params[0].replace("#","").replace(",","");
  return cleanTag;
}

export default helper(cleanTags);
