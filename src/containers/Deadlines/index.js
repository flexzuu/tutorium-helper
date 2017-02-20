import Deadlines from 'components/Deadlines';
import { loading } from 'hoc/utils';
import { compose } from 'recompose';

export default compose(
  loading(props => props.data),
)(Deadlines)
