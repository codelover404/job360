var modals=document.querySelectorAll(".modal");

const signup=()=>{
    var email=document.querySelector("#signupemail").value;
    var password=document.querySelector("#signuppassword").value;
    // console.log(loginUseremail,loginUserpassword) 
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=>{
        // console.log(result);
        var error="Your Account Has Been Created";
        M.toast({html:error,classes:'green'});
    })
    .catch((err)=>{
        var error="We can not create your account at this time";
        M.toast({html:error,classes:'red'});
        // console.log(err)
    })

    
    M.Modal.getInstance(modals[0]).close();

email="";
password="";  
}



const signin=()=>{
    var email=document.querySelector("#signemail").value;
    var password=document.querySelector("#signpassword").value;
    // console.log(loginUseremail,loginUserpassword) 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((result)=>{
        // console.log(result.user.email);
        // window.location="demo.html";
        M.toast({html:`Wellcome ${result.user.email}`,classes:'green'})

    })
    .catch((err)=>{
        var error = err.message="Your Email or Password Are Not Correct ";
        M.toast({html:error,classes:'red'})
    })

    M.Modal.getInstance(modals[1]).close();

}


const logout=()=>{
    firebase.auth().signOut();
}
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log(user);
    }else{
        M.toast({html:"Sign Out Successfuly",classes:"green"})
    }
})






var provider = new firebase.auth.GoogleAuthProvider();

const logingoogle=()=>{
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })

    }


    

var provider1 = new firebase.auth.FacebookAuthProvider();

const loginfacebook=()=>{
    firebase.auth().signInWithPopup(provider1)
    .then((result) => {
        console.log(result)
    })
    .catch((err)=>{
        console.log(err)
    })

    }



    
    const logingit=()=>{

        var provider = new firebase.auth.GithubAuthProvider();
            firebase.auth().signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = credential.accessToken;
        
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        
        
        }
