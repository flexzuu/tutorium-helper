import React from 'react';
import TimeAgo from 'react-timeago';
import Table from 'components/Table';
import Tutorium from 'api/Tutorium';
// import { TiThumbsDown, TiThumbsUp } from 'react-icons/ti';
// import FaBeer from 'react-icons/fa/beer';
import ThumbsUp from 'components/ThumbsUp';
import ThumbsDown from 'components/ThumbsDown';
import './style.css';
const colors = {
  red: '#FF4136',
  green: '#2ECC40',
}

const booleanFormatter = (value,unit,suffix,deadline) => {
  if (!deadline) {
    return <ThumbsUp color={colors.green} size={24} />
  }
  switch (suffix) {
    case 'ago':
      return <ThumbsDown color={colors.red} size={24} />
    case 'from now':
      return <ThumbsUp color={colors.green} size={24} />
    default:
      return null
  }
}
const Row = ({title, deadline, id}) => (
  <tr>
    <td className="hideMobile">{id}</td>
    <td>{title}</td>
    <td className="hideMobile">{deadline && deadline.toLocaleDateString()}</td>
    <td>{deadline && <TimeAgo date={deadline}/>}</td>
    <td>{<TimeAgo date={deadline} formatter={booleanFormatter}/>}</td>
  </tr>
);
const Head = () => (
  <tr>
    <th className="hideMobile">Lesson</th>
    <th>Title</th>
    <th className="hideMobile">Deadline</th>
    <th>Time to Deadline</th>
    <th>Status</th>
  </tr>
);

export default () => (
  <div className="Deadlines">
    <Table data={Tutorium} Row={Row} Head={Head} />
  </div>
);
