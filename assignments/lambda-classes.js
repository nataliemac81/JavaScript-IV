// CODE here for your Lambda Classes

// BASE PERSON CLASS
class Person {
  constructor(attributes) {
		this.name = attributes.name;
		this.age = attributes.age;
		this.location = attributes.location;
		this.gender = attributes.gender;
	}

	speak() {
		console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
	}
}



// console.log(nat);

// INSTRUCTOR CLASS -- inherits from Person class

class Instructor extends Person {
	constructor(attrs) {
		super(attrs);
		this.specialty = attrs.specialty;
		this.favLanguage = attrs.favLanguage;
		this.catchPhrase = attrs.catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

// STUDENT CLASS -- inherits from Person class

class Student extends Person {
	constructor(attrs) {
		super(attrs);
		this.previousBackground = attrs.previousBackground;
		this.className = attrs.className;
		this.favSubjects = attrs.favSubjects;
	}

	listsSubjects() {
		console.log(this.favSubjects);
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}
}

// PROJECT MANAGER CLASS -- inherits from Instructors

class ProjectManager extends Instructor {
	constructor(attrs) {
		super(attrs)
		this.gradClassName = attrs.gradClassName;
		this.favInstructor = attrs.favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standup time!`);
	}

	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

// People Objects

const carina = new Person({
	name: 'Carina',
	age: 38,
	location: 'Chicago',
	gender: 'F'
});

const carlos = new Person({
	name: 'Carlos',
	age: 45,
	location: 'Philadelphia',
	gender: 'M'
});


// Instructor Objects

const gigi = new Instructor({
	name: 'Gigi',
	age: 30,
	location: 'Atlanta',
	gender: 'F',
	specialty: 'APIs',
	favLanguage: 'Ruby',
	catchPhrase: 'Ruby is for everyone'
});

const marcus = new Instructor({
	name: 'Marcus',
	age: 27,
	location: 'Oakland',
	gender: 'M',
	specialty: 'React',
	favLanguage: 'JavaScript',
	catchPhrase: 'JavaScript is for everyone'
});

const lauren = new Instructor({
	name: 'Lauren',
	age: 25,
	location: 'Detroit',
	gender: 'F',
	specialty: 'Databases',
	favLanguage: 'Go',
	catchPhrase: 'Go is for everyone'
});

// Student Objects

const rachel = new Student({
	name: 'Rachel',
	age: 29,
	location: 'Denver',
	gender: 'F',
	previousBackground: 'Attorney',
	className: 'CS100',
	favSubjects: ['HTML', 'JavaScript', 'CSS', 'React']
});

const christian = new Student({
	name: 'Christian',
	age: 22,
	location: 'Houston',
	gender: 'M',
	previousBackground: 'Waiter',
	className: 'CS101',
	favSubjects: ['JavaScript', 'React']
});

const mariah = new Student({
	name: 'Mariah',
	age: 32,
	location: 'New Orleans',
	gender: 'F',
	previousBackground: 'Bartender',
	className: 'CS100',
	favSubjects: ['HTML','CSS']
});

// Project Manager Objects

const selena = new ProjectManager({
	name: 'Selena',
	age: 28,
	location: 'Sacramento',
	gender: 'F',
	specialty: 'CSS Layout',
	favLanguage: 'Python',
	catchPhrase: 'Python is for everyone',
	gradClassName: 'CS100',
	favInstructor: 'Lauren'
});

const chris = new ProjectManager({
	name: 'Chris',
	age: 35,
	location: 'New York',
	gender: 'F',
	specialty: 'debugging',
	favLanguage: 'JavaScript',
	catchPhrase: 'JavaScript is for everyone',
	gradClassName: 'CS101',
	favInstructor: 'Gigi'
});

const jamie = new ProjectManager({
	name: 'Jamie',
	age: 24,
	location: 'Baltimore',
	gender: 'F',
	specialty: 'OOP',
	favLanguage: 'Ruby',
	catchPhrase: 'Ruby is for everyone',
	gradClassName: 'CS100',
	favInstructor: 'Marcus'
});

// person tests

console.log(carina.speak());

// speak() {
// 	console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
// }

// instructor tests

console.log(marcus.demo('CSS'));
console.log(gigi.grade(mariah, 'HTML'));

// demo(subject) {
// 	console.log(`Today we are learning about ${subject}`);
// }

// grade(student, subject) {
// 	console.log(`${student.name} receives a perfect score on ${subject}`);
// }

// student tests

console.log(christian.listsSubjects());
console.log(rachel.PRAssignment('JavascriptIV'));
console.log(mariah.sprintChallenge('JavascriptIII'));

// listsSubjects() {
// 	console.log(this.favSubjects);
// }

// PRAssignment(subject) {
// 	console.log(`${student.name} has submitted a PR for ${subject}`);
// }

// sprintChallenge(subject) {
// 	console.log(`${student.name} has begun sprint challenge on ${subject}`);
// }

// pm tests

console.log(jamie.standUp('CS101'));
console.log(selena.debugsCode(mariah, 'React'));

// standUp(channel) {
// 	console.log(`${this.name} announces to ${channel}, @channel standup time!`);
// }

// debugsCode(student, subject) {
// 	console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
// }