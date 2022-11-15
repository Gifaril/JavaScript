let faveToys = [
    "Bone",
    "Water Bottle",
    "Ball",
    "Shoes",
    "Ducklings",
    "Tabo",
  ];

  const dogs = {
    name1: "Sushi",
    age1: 1,
    name2: "Dosan",
    age2: 2,
    name3: "Moonchin",
    age3: 2,
  };

  function convertDogAge(humanAge) {
    return humanAge * 7;
  }

  const dogAge1 = convertDogAge(dogs.age1);
  const dAge1 = `Age: Your doggie is ${dogAge1} years old in dog years!`;
  const dName1 = `Name: ${dogs.name1}`;
  const dToy1 = `fave toys: ${faveToys[0]}, ${faveToys[1]}`;
  document.getElementById("dogAge1").innerHTML = dAge1;
  document.getElementById("dogName1").innerHTML = dName1;
  document.getElementById("toys1").innerHTML = dToy1;

  const dogAge2 = convertDogAge(dogs.age2);
  const dAge2 = `Age: Your doggie is ${dogAge2} years old in dog years!`;
  const dName2 = `Name: ${dogs.name2}`;
  const dToy2 = `fave toys: ${faveToys[2]}, ${faveToys[3]}`;
  document.getElementById("dogAge2").innerHTML = dAge2;
  document.getElementById("dogName2").innerHTML = dName2;
  document.getElementById("toys2").innerHTML = dToy2;

  const dogAge3 = convertDogAge(dogs.age3);
  const dAge3 = `Age: Your doggie is ${dogAge3} years old in dog years!`;
  const dName3 = `Name: ${dogs.name3}`;
  const dToy3 = `fave toys: ${faveToys[4]}, ${faveToys[5]}`;
  document.getElementById("dogAge3").innerHTML = dAge3;
  document.getElementById("dogName3").innerHTML = dName3;
  document.getElementById("toys3").innerHTML = dToy3;
