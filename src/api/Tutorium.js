import { getDate } from 'api/Time';
const Tutorium = [
  
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
