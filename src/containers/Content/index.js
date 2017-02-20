import Content from 'components/Content';
import { getPath, error, loadData } from 'hoc/utils';
import { compose, defaultProps, mapProps } from 'recompose';

export default compose(
  defaultProps({error: true}),
  getPath,
  error(props => props.error),
  loadData,
  error(props => props.error),
  mapProps((p) => {
    if (p.spreadsheetData && p.worksheetData) {
      return {
        title:  `${p.spreadsheetData.title} - ${p.worksheetData.title}`,
        data:p.worksheetData.data,
        updated:p.worksheetData.updated
      }
    }
    return {
      title: p.worksheet,
      data: null,
      updated: null
    }
  }),
)(Content)
