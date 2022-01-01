const persons = [
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
];
const vaxTrail = (persons) => {
  if (!Array.isArray(persons)) {
    console.log("Please Enter An Array");
  } else if (
    !persons.some((person) => person.age && person.temperature && person.name)
  ) {
    console.log("please enter an array of object");
  } else {
    const A = persons.filter(
      (sort) => sort.age >= 20 && sort.age <= 30 && sort.temperature < 100
    );
    const B = persons.filter(
      (sort) => sort.age >= 31 && sort.age <= 40 && sort.temperature < 100
    );
    const C = persons.filter(
      (sort) => sort.age >= 41 && sort.age <= 50 && sort.temperature < 100
    );
    const D = persons.filter((sort) => sort.temperature >= 100);
    // console.log(A, B, C, D);
    const newList = { A, B, C, D };
    return newList;
  }
};

const outPut = vaxTrail(persons);
console.log(outPut);
