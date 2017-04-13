import * as gsheets from 'gsheets';

// Convert Excel dates into JS date objects
//
// @param excelDate {Number}
// @return {Date}
const getJsDateFromExcel = excelDate => {
  // JavaScript dates can be constructed by passing milliseconds
  // since the Unix epoch (January 1, 1970) example: new Date(12312512312);

  // 1. Subtract number of days between Jan 1, 1900 and Jan 1, 1970, plus 1 (Google "excel leap year bug") plus 1 for watever reason
  // 2. Convert to milliseconds.

  return new Date((excelDate - (25567 + 1 + 1)) * 86400 * 1000);
};

export const getWorksheet = (spreadsheet, worksheet) =>
  gsheets.getWorksheet(spreadsheet, worksheet)// .then(res => {
  // 	console.log(res);
  // 	return res;
  // })
  .then(res =>
    Object.assign(res, {
      updated: new Date(res.updated),
      data: res.data.map(o =>
        Object.assign(
          {},
          {
            key: o.Key,
            title: o.Title,
            link: o.Link,
            deadline: new Date(getJsDateFromExcel(o.Deadline).setHours(23)),
          }
        )),
    }));

export const getSpreadsheet = spreadsheet =>
  gsheets.getSpreadsheet(spreadsheet)// .then(res => {
  // 	console.log(res);
  // 	return res;
  // })
  .then(res =>
    Object.assign(res, {
      updated: new Date(res.updated),
    }));
