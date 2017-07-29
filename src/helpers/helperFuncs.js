function toCapitalCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function formatDate(date) {
    date = new Date(date)
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

  const day = date.getDay();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
}

export { toCapitalCase, formatDate };
