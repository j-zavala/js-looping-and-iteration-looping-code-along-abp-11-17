// Code your solutions in this file
function printBadges(name) {
  for (let index = 3; index < name.length; index++) {
    console.log(`Welcome ${name[index]}! You are employee #1.`);
  }
  return name;
}
