// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to match drivers whose names start with the given letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  // Function to match driver objects by name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  