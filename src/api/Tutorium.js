import { getDate } from 'api/Time';
/** Tutorium-Data:
  key: '1',                         Unique Key also displayed as Lesson number
  title: 'Überblick und Historie',  Lesson Title
  deadline: '10/30/2016',           Lession deadline (in Month/Day/Year Format) or null
**/
const Tutorium = [
  {
    key: '1',
    title: 'Überblick und Historie',
    deadline: '10/30/2016',
  },
  {
    key: '2',
    title: 'Zahlensysteme und Textkodierung',
    deadline: null,
  },
  {
    key: '3',
    title: 'Business Computing',
    deadline: null,
  },
  {
    key: '4',
    title: 'Programmierung – Grundlagen',
    deadline: null,
  },
  {
    key: '5',
    title: 'Programmierung mit VBA',
    deadline: null,
  },
  {
    key: '6',
    title: 'Rechnerarchitektur',
    deadline: null,
  },
]
const addDate = (data) => {
  if (data.deadline) {
    return {
      ...data,
      deadline: getDate(data.deadline),
    }
  }
  return data;
}
const addDeadlineDate = (data) => data.map(addDate);
export default addDeadlineDate(Tutorium);
