//1. Same keys and values
function createStudent(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
//2. Same keys and values ES2015
function createStudent(firstName, lastName){
  return {
    firstName,
    lastName
  }
}
//3.Computed Property Names
var favoriteNumber = 42;

var district = {
  firstName: "Palm Beach"
}

//3. instructor[favoriteNumber] = "That is my favorite!"
//(Computed Property Names ES2015)
let favoriteNumber = 17;

const hero = {
  firstName: "KalEl",
  [favoriteNumber]: "17 is my favorite number!"
}

//4. Object Methods
var cat = {
  firstName: "Mini",
  sayHi: function(){
    return "Meow!";
  },
  sayBye: function(){
    return this.firstName  + "says meow!";
  }
}


//5.Object Methods ES2015
const student = {
  firstName: "Brandon",
  sayAwesomeDay(){
    return "Awesome Day";
  },
  saySeeYouSoon(){
    return this.firstName + " says See You Soon!";
  }
}


//6. createAnimal function
//Write a function which generates an animal object. The function should accepts 3 arguments:

//species: the species of animal (‘cat’, ‘dog’)
//verb: a string used to name a function (‘bark’, ‘bleet’)
//noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")

d.bark()  

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")

s.bleet() 

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}