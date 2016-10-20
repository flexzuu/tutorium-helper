import React from 'react';
import TimeAgo from 'react-timeago';
import Table from 'components/Table';
import Tutorium from 'api/Tutorium';

const Row = ({title, deadline}) => (
  <tr>
    <td>{title}</td>
    <td>{deadline && deadline.toString()}</td>
    <td>{deadline && <TimeAgo date={deadline}/>}</td>
  </tr>
);
const Head = () => (
  <tr>
    <th>Title</th>
    <th>Deadline</th>
    <th>Time to Deadline</th>
  </tr>
);

export default () => (
  <div className="Deadlines">
    <Table data={Tutorium} Row={Row} Head={Head} />
  </div>
);
