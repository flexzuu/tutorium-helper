import TutoriumData from 'data/TutoriumData';

const convertStringToDate = (dateString, hours, minutes) => {
  const date = new Date(dateString)
  date.setHours(hours)
  date.setMinutes(minutes)
  return date
}
const convertDeadlineStringsToDates = (data) => {
  if (data.deadline) {
    return {
      ...data,
      deadline: convertStringToDate(data.deadline, 18, 50),
    }
  }
  return data;
}
export default TutoriumData.map(convertDeadlineStringsToDates);
