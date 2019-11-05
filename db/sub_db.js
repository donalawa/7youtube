// Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBe4Op6VeJkQsRw_tD2dUrBJhZsnUnkco4",
//     authDomain: "sevenmessage-b3948.firebaseapp.com",
//     databaseURL: "https://sevenmessage-b3948.firebaseio.com",
//     projectId: "sevenmessage-b3948",
//     storageBucket: "sevenmessage-b3948.appspot.com",
//     messagingSenderId: "654242595714",
//     appId: "1:654242595714:web:a39acad02a3f96bfa0c59b"
//   };
  // Initialize Firebase
//   firebase.initializeApp(config);
  // firebase.initializeApp(firebaseConfig)
  
//   Reference messages collection
//   var messagesRef = firebase.database().ref('subscribers');


// let sub_btn = document.querySelector('#subscribe');


// sub_btn.addEventListener('click',function(){
//    let sub_name = getdata('sub_name');
//    let sub_email = getdata('sub_email');
//     savetoDb(sub_name,sub_email);
//    console.log(sub_name, sub_email)
// })

// function getdata(id){
//     let data = document.querySelector(`#${id}`).value;
//     return data;
// }


// function savetoDb(name,email){
//     var newMessageRef = messagesRef.push();

//     newMessageRef.set({
//         name: name,
//         email: email
//     })
//   }