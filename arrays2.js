function isArrayLengthOdd(number) {
  const sizeOfArray = number.length;
  if (sizeOfArray % 2) {
    return true;
  } else {
    return false;
  }
}

function isArrayLengthEven(number) {
  const sizeOfArray = number.length;
  if (sizeOfArray % 2) {
    return false;
  } else {
    return true;
  }
}
function addLailToArray(instructors) {
  const newInstructors = instructors;
  newInstructors.push("Laila");
  return newInstructors;
}
function eliminateTeam(teams) {
  const lastTeam = teams.pop();
  return lastTeam;
}
function secodHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    return fruits.slice(2, 4);
  }
}
console.log(secodHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
