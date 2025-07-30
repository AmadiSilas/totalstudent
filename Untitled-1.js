const totalStudent =(students) =>{
    return students.length
}
const students = ()=>{
     const students = ["ada", "obo", "chidi","tony", 5, 8, 3]
    new Promise((resolve, reject) => {
        resolve(totalStudent(students))
    }).then((total)=>{
      console.log(total);
      
    }
    ).catch((err)=>{
console.log(err.message);

    })

    }
console.log(students());


