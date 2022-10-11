// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//Function createUser
function createUser(firstName1, lastName1) 
{
  let createUserObject = {  
  firstName: firstName1,
  lastName: lastName1,
  }

   return createUserObject;

}

console.log(createUser())


// function setAge
let user = {
    firstName:'Tim',
    lastName:'Horton',
};

function setAge (user1, age)
{
  user1['age'] = age;

  return user1;
}

console.log(setAge(user))

// function incrementAge


function incrementAge(user){

    user.age = user.age + 1;

    return user;
}

console.log(incrementAge)

// fixCar

 function fixCar(car)
{
    car.needsMaintenance = car.needsMaintenance = false;
    return car
}

console.log(fixCar)

//addGrades



function addGrades(student, newGrades)
{
    for(let i = 0; i < newGrades.length; i++)
    {

        student.grades.push(newGrades[i]);
    }
    return student
}

console.log(addGrades);


// function GetDataType

function getDataType (object, key)
{
    
    //for(let i = 0; i < keytype.length; i++)
    //{
      keyType = typeof object[key];
   //}
    return keyType;
}

console.log(getDataType);

// function addtodo

function addTodo (todo, newTodo)
{
     
     let newArray = todo.concat(newTodo);
     
     return newArray;
}

console.log(addTodo);


//function addSong

function addSong(playlist, newSongs)
{  
    
     songs = playlist.songs.push(newSongs);
     playlist['duration'] = (playlist['duration']+= newSongs['duration']);
    

    return playlist;

}

console.log(addSong);


//update report card 

function updateReportCard (reportCard, grades){
    reportCard['grades'] = grades;
}





// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
