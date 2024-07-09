interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  linesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name: string;
  kind: string;
}

const student: StudentProps = {
  firstName: 'Andrew',
  lastName: 'Owyang',
  age: 27,
};
const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.linesInIrvine = true;
console.log('value of student.livesInIrvine:', student.linesInIrvine);
student.previousOccupation = 'Server';
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('typeof student:', typeof student);

const vehicle: Vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2010,
};
vehicle['isConvertible'] = false;
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
vehicle['color'] = 'white';
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

const pet: Pet = {
  name: 'Manny',
  kind: 'Snowman',
};
delete pet.name;
delete pet['kind'];
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
