// all global functions
// function to truncate text
export const truncateText = (payload, size) => {
  return payload.length > size ? payload.slice(0, size - 1) + "…" : payload;
};

// functiont to format and parse date
export const formatDate = (date) => {
  return new Date(Date.parse(date));
};

// function to calculate the time left till a post disappears from screel
export const timeLeft = (timestamp) => {
  var postDate = new Date(timestamp);
  var futureDate = new Date(postDate.getTime() + 86400000); // Adding 24 hours in milliseconds
  var currentDate = new Date();
  var timeDiff = futureDate - currentDate;
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);

  if (hours >= 24) {
    return "in " + Math.floor(hours / 24) + " days";
  } else if (hours > 0) {
    return "in " + hours + " hours";
  } else if (minutes > 0) {
    return "in " + minutes + " minutes";
  } else if (seconds > 0) {
    return "in " + seconds + " seconds";
  } else {
    return "24 hours has passed";
  }
};

// function to know if user post is within 10 minutes
export const isWithinTenMinutes = (dbTimestamp) => {
  const currentTime = new Date().getTime();
  const dbDate = new Date(dbTimestamp);
  const timestamp = dbDate.getTime();
  const difference = currentTime - timestamp;
  const tenMinutesInMilliseconds = 10 * 60 * 1000; //the 10 is ten minutes
  return difference <= tenMinutesInMilliseconds;
};

//debounce function permits us to call a function only after a specified timeout no matter
// how many times it is called in the code
let debounceTimer;
export const debounce = (callback, time) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};
