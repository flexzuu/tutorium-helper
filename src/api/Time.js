const getDate = (dateString) => {
  const date = new Date(dateString)
  date.setHours(14)
  return date
}

export { getDate };
