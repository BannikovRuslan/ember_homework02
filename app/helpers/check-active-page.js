import { helper } from '@ember/component/helper';

export function checkActivePage(params/*, hash*/) {
  let [page, activePage] = params;
  
  if (typeof page == 'undefined') {
    return "page-item";
  }

  if (typeof activePage == 'undefined') {
    return "page-item";
  }
  
  return page == activePage;
}

export default helper(checkActivePage);
