import { withContext, getContext, branch, renderComponent, lifecycle } from 'recompose'
import { PropTypes } from 'react'
import Error from 'components/Error';
import Loading from 'components/Loading';
import { getWorksheet, getSpreadsheet } from 'api/Google';

const parsePath = (path) => {
  const splitPath = path.split('/')
  const decoded = splitPath.map(decodeURIComponent)
  const spreadsheet = decoded[1]
  const worksheet = decoded[2]
  if(spreadsheet && worksheet){
    return {
      spreadsheet,
      worksheet,
      error: false
    }
  }
  return {
    error: true
  }
}

export const withPath = withContext(
  {
    spreadsheet: PropTypes.string,
    worksheet: PropTypes.string,
    error: PropTypes.bool.isRequired
  },
  (props) => parsePath(document.location.pathname)
)
export const getPath =  getContext(
  {
    spreadsheet: PropTypes.string,
    worksheet: PropTypes.string,
    error: PropTypes.bool.isRequired
  }
)

export const error = hasError =>
  branch(
    props => hasError(props),
    renderComponent(Error),
  )

export const loading = hasLoaded  =>
  branch(
    props => !hasLoaded(props),
    renderComponent(Loading),
  )

export const loadData = lifecycle({
    componentDidMount: function() {
      const { spreadsheet, worksheet } = this.props
      getWorksheet(spreadsheet, worksheet)
        .then((worksheetData)=>
          this.setState({worksheetData})
        )
        .catch(() => this.setState({error: true}))
      getSpreadsheet(spreadsheet)
        .then((spreadsheetData)=>
          this.setState({spreadsheetData})
        )
        .catch(() => this.setState({error: true}))
    }
  })
