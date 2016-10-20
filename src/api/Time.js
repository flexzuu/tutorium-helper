const getDate = (dateString) => {
  const date = new Date(dateString)
  date.setHours(18)
  date.setMinutes(50)
  return date
}

export { getDate };
