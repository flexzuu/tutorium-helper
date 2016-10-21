/** Tutorium-Data:
  key: '1',                         Unique Key also displayed as Lesson number
  title: 'Überblick und Historie',  Lesson Title
  deadline: '10/30/2016',           Lession deadline (in Month/Day/Year Format) or null
**/
const Tutorium = [
  
]
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
export default Tutorium.map(convertDeadlineStringsToDates);
