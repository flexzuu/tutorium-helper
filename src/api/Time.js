const getDate = (dateString) => {
  const date = new Date(dateString)
  date.setHours(14)
  return date
}

const getDates = (dateStrings) => dateStrings.map(getDate);

export getDates;
