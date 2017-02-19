import gsheets from 'gsheets'

// const sheet = "1Fu1G_0wotPc_1KWOVyeDpZHpp_wDhZ_u1015Tn4Y9cQ";

// Convert Excel dates into JS date objects
//
// @param excelDate {Number}
// @return {Date}
const getJsDateFromExcel = (excelDate) => {

  // JavaScript dates can be constructed by passing milliseconds
  // since the Unix epoch (January 1, 1970) example: new Date(12312512312);

  // 1. Subtract number of days between Jan 1, 1900 and Jan 1, 1970, plus 1 (Google "excel leap year bug") plus 1 for watever reason
  // 2. Convert to milliseconds.

	return new Date((excelDate - (25567 + 1 + 1))*86400*1000);

}

const getData = (sheet) =>
  gsheets.getSpreadsheet(sheet)
    .then(res => gsheets.getWorksheet(sheet, res.worksheets[0].title))
    .then(res => res.data)
    .then(data => data.map(
      o => Object.assign(
        o,
        {
          Deadline: new Date(getJsDateFromExcel(o.Deadline).setHours(23))
        }
      )
    )
  )
