// Code your solution here

function findMatching(array, string) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}


findMatching(drivers, "Bobby");

function fuzzyMatch(array, string) {
  let length = string.length; 
  return array.filter(function (provLetter) {
    return provLetter.slice(0, length) === string;
  });
}

fuzzyMatch(drivers, "Bo");

function matchName(array, string) {
  return array.filter(function (matchTheName) {
    return matchTheName.name.toLowerCase() === string.toLowerCase();
  });
}

matchName(drivers, "Bobby");
