import React from 'react';
import TimeAgo from 'react-timeago';
import Table from 'components/Table';
import ThumbsUp from 'react-icons/lib/fa/thumbs-up';
import File from 'react-icons/lib/fa/file-o';
import ThumbsDown from 'react-icons/lib/fa/thumbs-down';
import './style.css';
const colors = {
  red: '#FF4136',
  green: '#2ECC40',
}
const Link = ({url}) => (
  <a href={url} rel="external" target="_blank">
    <File />
  </a>
)
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
const Row = ({title, deadline, id, link}) => (
  <tr>
    <td className="hideMobile">{id}</td>
    <td className="file">{link && <Link url={link}/>}</td>
    <td>{title}</td>
    <td className="hideMobile">{deadline && deadline.toLocaleDateString()}</td>
    <td>{deadline && <TimeAgo date={deadline}/>}</td>
    <td>{<TimeAgo date={deadline} formatter={booleanFormatter}/>}</td>
  </tr>
);
const Head = () => (
  <tr>
    <th className="hideMobile">Lesson</th>
    <th className="file"></th>
    <th>Title</th>
    <th className="hideMobile">Deadline</th>
    <th>Time to Deadline</th>
    <th>Status</th>
  </tr>
);

export default ({data}) => (
  <section className="Deadlines">
    <Table data={data} Row={Row} Head={Head} />
  </section>
);
