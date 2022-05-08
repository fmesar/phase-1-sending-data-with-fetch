
  function submitData(name, email) {
const formData = {
    name: name,
    email: email,
   
  };



  // method: "POST" is missing from the object below
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData)
   
  };


 return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      document.body.innerHTML = ` ${object.id}` 
    })
    .catch ((error) => {
        //console.log(error)
        console.log(error.message)
        document.body.innerHTML = error.message
})}
//     function ElementCreator(data){
//         let elements = document.createElement('div')

//         elements.innerHTML = `
       
//         <ul class="list-group list-group-flush">
//     <li class="list-group-item">${data.name}</li>
//     <li class="list-group-item">${data.email}</li>          
//   </ul>
// `
//  let data = document.querySelector('body')
//     data.innerHTML = `${formData.name}, ${formData.email}`
    // }
    // ElementCreator(formData)
