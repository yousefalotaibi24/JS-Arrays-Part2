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
console.log(isArrayLengthEven([1, 2, 3, 4]));
function addLailToArray(instructors) {
  const newInstructors = instructors;
  newInstructors.push("Laila");
  return newInstructors;
}
console.log(addLailToArray(["Mshary", "Hasan"]));
function eliminateTeam(teams) {
  const lastTeam = teams.pop();
  return lastTeam;
}

console.log(eliminateTeam(["Barzil", "Germany", "Italy"]));

function secodHalfOfArrayIfItIsEven(fruits) {
  if (isArrayLengthEven(fruits)) {
    return fruits.slice(2, 4);
  }
}
console.log(secodHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
