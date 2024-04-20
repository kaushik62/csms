import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5qQuBpPuuS5Kog2me2-Nzu2q5yCKbNzc",
  authDomain: "sports-management-1098a.firebaseapp.com",
  projectId: "sports-management-1098a",
  storageBucket: "sports-management-1098a.appspot.com",
  messagingSenderId: "225325722699",
  appId: "1:225325722699:web:12bd2c1807fb063f6571ce"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const db = getFirestore(app);
console.log(db);

// sing in with google
let google_signin_btn = document.querySelectorAll(".google_signin_btn");

google_signin_btn.forEach(function (button) {
  button.addEventListener("click", function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  });
});

//  signup with email

let para_danger = document.querySelector(".para_danger");
let para_success = document.querySelector(".para_success");
let login_pop = document.getElementById("login_pop");
let signup_pop = document.getElementById("signup_pop");

let signup = document.getElementById("signup");

signup.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      para_success.style.display = "block";
      signup_pop.style.display = 'none';
      login_pop.style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      para_danger.style.display = "block";
    });

  setTimeout(() => {
    para_success.style.display = "none";
    para_danger.style.display = "none";
  }, 2000);
});

// login with email
let login_btn = document.getElementById("login");
let logged_successfully = document.getElementById("logged_successfully");
let incorrect_user = document.getElementById("incorrect_user");
let logged_in = document.querySelector(".logged_in");

login_btn.addEventListener("click", () => {
  let email_1 = document.getElementById("email_1").value;
  let password_1 = document.getElementById("password_1").value;
  signInWithEmailAndPassword(auth, email_1, password_1)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      incorrect_user.style.display = "none";
      logged_successfully.style.display = "block";
      window.location.hash = "reload";
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      incorrect_user.style.display = "block";
    });
});


// firebase database
// form validation

// add data to firestore
const notify = document.querySelector(".notify");
async function addData() {
  const name = document.querySelector("#name").value;
  const email_id = document.querySelector("#email_id").value;

  if (document.querySelector("#name").value == "") {
    demo_heading.style.display = "block";
    demo_heading.classList.add("fields_required")
    demo_heading.innerHTML = "All fields are required !";
    setTimeout(() => {
      demo_heading.classList.remove("fields_required")
      demo_heading.style.display = "none";
    }, 2000);
    return false;
  }
  if (document.querySelector("#email_id").value == "") {
    demo_heading.style.display = "block";
    demo_heading.classList.add("fields_required")
    demo_heading.innerHTML = "All fields are required !";
    setTimeout(() => {
      demo_heading.classList.remove("fields_required")
      demo_heading.style.display = "none";
    }, 2000);
    return false;
  }
  if (document.querySelector("#mobile_no").value == "") {
    demo_heading.style.display = "block";
    demo_heading.classList.add("fields_required")
    demo_heading.innerHTML = "All fields are required !";
    setTimeout(() => {
      demo_heading.classList.remove("fields_required")
      demo_heading.style.display = "none";
    }, 2000);
    return false;
  }
  let mobileNumber = document.querySelector("#mobile_no").value
  if (mobileNumber.length !== 10) {

    demo_heading.style.display = "block";
    demo_heading.classList.add("fields_required")
    demo_heading.innerHTML = "10 digits mobile no only !";
    setTimeout(() => {
      mobileInput.value = "";
      demo_heading.classList.remove("fields_required")
      demo_heading.style.display = "none";
    }, 2000);
    mobileInput.focus();
    return false;
  }
  // validate email id
  function validateEmail(email) {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Example usage:
  // const email = document.getElementById('email_id').value;
  if (validateEmail(document.getElementById('email_id').value)) {
    // alert("Valid email address");
  } else {
    demo_heading.style.display = "block";
    demo_heading.innerHTML = "Invalid email";
    demo_heading.classList.add("fields_required")
    setTimeout(() => {
      demo_heading.classList.remove("fields_required")
      demo_heading.style.display = "none";
      document.getElementById('email_id').value = "";
    }, 2000);
    return false;
  }
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email_id,
      mobile_no: mobileNumber
    });
    demo_heading.style.display = "block";
    demo_heading.classList.add("added_successfully")
    demo_heading.innerHTML = "Added Successfully";
    document.querySelector("#name").value = "";
    document.querySelector("#email_id").value = "";
    document.querySelector("#mobile_no").value = "";
    GetData();

    setTimeout(() => {
      demo_heading.classList.remove("added_successfully")
      demo_heading.style.display = "none";
    }, 2000);

  } catch (error) {
    console.log(error);
  }
}
const addbtn = document.querySelector("#add_data");
addbtn.addEventListener("click", addData);
// get data for firebase
async function GetData() {
  try {
    const getDataQuery = await getDocs(collection(db, "users"));
    let table_row = '';
    getDataQuery.forEach((doc) => {
      // console.log(doc.data());
      const data = doc.data();
      table_row += `
      <tr class="table_row">
      <td>${data.name}</td>
      <td>${data.email}</td>
      <td>${data.mobile_no}</td>
      <td><button class ="del_btn" onclick ="deleteData('${doc.id}')">Delete</button></td>
      <td><button class ="update_btn" onclick ="updateData('${doc.id}')">Update</button></td>
      </tr>
      `
    })

    document.querySelector("tbody").innerHTML = table_row;

  } catch (error) {
    console.log(error);
  }
}
let demo_heading = document.querySelector(".demo_heading");
GetData();
// delete data
window.deleteData = async function (id) {
  // alert(id);
  try {
    await deleteDoc(doc(db, "users", id));
    demo_heading.style.display = "block";
    demo_heading.classList.add("delete_successfully")
    demo_heading.innerHTML = "Deleted Successfully";
    GetData();
    setInterval(() => {
      demo_heading.classList.remove("delete_successfully")
      demo_heading.style.display = "none";
    }, 2000);
    getDocs();
  } catch (error) {
    console.log(error);
  }
}

// update data
let player_detail_heading = document.getElementById("player_detail_heading");
window.updateData = async function (id) {
  addbtn.style.display = 'none';
  update_data.style.display = 'block';
  player_detail_heading.innerHTML = "Update Player Details"
  try {
    const docSnapShot = await getDoc(doc(db, "users", id));
    const currentUser = docSnapShot.data();
    document.querySelector("#name").value = currentUser.name;
    document.querySelector("#email_id").value = currentUser.email;
    document.querySelector("#mobile_no").value = currentUser.mobile;
    const update_data = document.querySelector("#update_data");
    addbtn.classList.add("hide");
    update_data.classList.add("show");
    update_data.addEventListener("click", async function () {
      const newName = document.querySelector("#name").value;
      const newEmail = document.querySelector("#email_id").value;
      const newMobile = document.querySelector("#mobile_no").value;
      if (newName !== null && newEmail !== null && newMobile !== null) {
        await updateDoc(doc(db, "users", id), {
          name: newName,
          email: newEmail,
          mobile_no: newMobile
        })
        document.querySelector("#name").value = "";
        document.querySelector("#email_id").value = "";
        document.querySelector("#mobile_no").value = "";
        demo_heading.style.display = "block";
        demo_heading.classList.add("updated_successfully")
        demo_heading.innerHTML = "Updated Successfully";
        GetData();
        addbtn.classList.add("show");
        setTimeout(() => {
          demo_heading.style.display = "none";
          update_data.style.display = 'none';
          demo_heading.classList.remove("updated_successfully")
          player_detail_heading.innerHTML = "Add Player details";
          addbtn.style.display = 'block';
        }, 2000);
      }
    })

    update_data.classList.add("show");

  } catch (error) {
    console.log(error);
  }
}
// date & time
let curr_Date = new Date();
// announcement
// add announcement data to firestore
async function addAnnouncementData() {
  const text_area = document.getElementById("text_area").value;

  if (document.getElementById("text_area").value == "") {
    notify.classList.add("fields_required");
    notify.innerHTML = "Enter message !";
    setTimeout(() => {
      notify.classList.remove("fields_required");
      notify.innerHTML = "";
    }, 2000);
    return false;
  }
  try {
    const docRef = await addDoc(collection(db, "Announcement_message"), {
      message: text_area,
      date: curr_Date,
    });
    notify.classList.add("added_successfully");
    notify.innerHTML = "Announcement Added Successfully";
    document.getElementById("text_area").value = "";
    GetAnnouncementData();

    setTimeout(() => {
      notify.classList.remove("added_successfully");
      notify.innerHTML = "";
    }, 2000);

  } catch (error) {
    console.log(error);
  }
}
const add_announcement_data = document.querySelector("#add_announcement_data");
add_announcement_data.addEventListener("click", addAnnouncementData);


// get announcement data form firebase
async function GetAnnouncementData() {
  try {
    const getDataQuery = await getDocs(collection(db, "Announcement_message"));
    let table_row = '';
    getDataQuery.forEach((doc) => {
      const data = doc.data();
      table_row += `

      <div class="announcement_box">
      <span>${curr_Date}</span>
      <p>${data.message}</p>
      <td><button class ="del_btn" onclick ="deleteAnnouncementData('${doc.id}')">Delete</button></td>
  </div>
      `
    })
    document.querySelector(".announcement_content").innerHTML = table_row;
  } catch (error) {
    console.log(error);
  }
}
GetAnnouncementData();

// delete announcement data
window.deleteAnnouncementData = async function (id) {
  try {
    await deleteDoc(doc(db, "Announcement_message", id));
    notify.classList.add("delete_successfully");
    notify.innerHTML = "Deleted Successfully";
    GetAnnouncementData();
    setInterval(() => {
      notify.classList.remove("delete_successfully");
      notify.innerHTML = "";
    }, 2000);
    getDocs();
  } catch (error) {
    console.log(error);
  }
}