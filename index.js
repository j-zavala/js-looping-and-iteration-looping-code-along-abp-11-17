// Code your solutions in this file
function printBadges(name) {
  for (let index = 0; index < name.length; index++) {
    console.log(`Welcome ${name[index]}! You are employee #${index + 1}.`);
  }
  return name;
}

const tailsNeverFails = () => {
  Math.floor(Math.random())
};