  

//we are able to use db.collection().add() here because we have a seperate file that is initializing our firestore 
let addToStore = (item) => {
    //we then create a collection call subscribers
    db.collection("subscribers").add(item)
    //this will work if we do not run into any error while adding the user
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    //we will catch and display the error if we run into any while adding user
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//adding a click event to the subascribing button
document.querySelector('#subscribe').addEventListener('click',()=>{
    
    //Checking if the the input fils are field or empty
   if(document.querySelector('#sub_name').value != '' && document.querySelector('#sub_email').value != ''){
    let user = {
        name: document.querySelector('#sub_name').value,
        email:document.querySelector('#sub_email').value
    }
    //We creage a regular expression that checks for a valid email
    let re = /^\w+([\.]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
    //Collecting the email from the input field
    let expemail = document.querySelector('#sub_email').value;
    //testing the email with our regular expression before submitting it to database
    if(re.test(expemail)){
        //if email is valid then we will add to db
        addToStore(user);
        clearFields();
        
      Swal.fire({
          position: 'top-center',
          type: 'success',
          title: 'Thanks For Subscribing',
          showConfirmButton: false,
          timer: 1500
    })
    }else {
        //Else we will ask the user to enter a valid email
        clearFields();
        Swal.fire(
            'Please Enter',
            'A Valid Email',
            'error'
          )
    }
    
      
   }
   //we will ask the user to fill out all fields
   else {
       console.log('Fill out all field')
       clearFields();
       Swal.fire(
        'Please Fill',
        'Out All Fields',
        'error'
      )
   }
})

//Saving contact form


let addToMessage = (item) => {
    db.collection("message").add(item)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

document.querySelector('#con_form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let c_name = document.querySelector('#name').value;
    let c_email = document.querySelector('#email').value;
    let c_message = document.querySelector('#message_box').value;
    let contact = {
    name: c_name,
    email: c_email,
    message: c_message
}
    if(document.querySelector('#name').value != '' && document.querySelector('#email').value != '' && document.querySelector('#message_box').value != ''){
        addToMessage(contact);
        
        Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Message Sent',
            showConfirmButton: false,
            timer: 1500
      })
    
        m_clearFields();
    }else {
        Swal.fire(
            'Please Fill',
            'Out All Fields',
            'error'
          )
        
        m_clearFields();
    }
})
function m_clearFields(){
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message_box').value = '';
}
function clearFields(){
    document.querySelector('#sub_name').value = '';
    document.querySelector('#sub_email').value = '';
}
// let getUsers = () => {
//     console.log('loading data...');
//     db.collection("users").get().then((querySnapshot) => {
//         console.log("Done");
//         let dataset = [];
//         querySnapshot.forEach((doc) => {

//             dataset.push({
//                 id: doc.id,
//                 data: doc.data()
//             })
//         });
//         console.log(dataset);
//     })
// }

// getUsers();