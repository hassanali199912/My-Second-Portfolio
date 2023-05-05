// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ZykrE7X8OsBCBdtFij_5JOo4PaDz8GU",
  authDomain: "myportofilio-191d3.firebaseapp.com",
  projectId: "myportofilio-191d3",
  storageBucket: "myportofilio-191d3.appspot.com",
  messagingSenderId: "339926831514",
  appId: "1:339926831514:web:a6e8f48a272fe12399ea23",
};

firebase.initializeApp(firebaseConfig);

const db = await firebase.firestore();

window.onload = () => {
  loadResumeHeader();
};

//#region Header

// my titiles  Sellector
var my_header_title = document.getElementById("my-header-title");
//Functions
function loadHerderTitle(arrayData) {
  if (arrayData != null) {
    arrayData.forEach((element) => {
      var temp = document.createElement("span");
      temp.appendChild(document.createTextNode(`${element}`));
      my_header_title.appendChild(temp);
    });
  } else {
    loadHerderTitle(["Front-end Developer", "UI/UX Designer"]);
  }
}

//Download Button Function
function dowenloadCV() {
  window.open("Hassan-ali-hassan-CV.pdf");
}

//#endregion Header

//#region Resume

// Selectors
var resume_div = document.querySelector("#resume-div").children;

var resume_experance_div = document.getElementById("resume-experance-div");

var skills_bars = document.getElementById("skills-bars");

// Data arrays
var resume_div_data = {
  title: "My Resume",
  subtitle: "Let Me Introduce Myself",
  description:
    "My passion for the web started in my second year of university life, and since that moment I have been developing myself in the web to be a great Full Stack, I have great knowledge of many front-end technologies and also the back-end, and I am glad that you take a look at my website and also some of my work.... have a good time.",
};

// var experinces_date = [
//   {
//     date: "May 2022",
//     title: "Freelancer iti course",
//     location: "iti Assuit",
//     "sub-title": "Freelancer course",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repudiandae consectetur dolorem, quaerat aliquid cumque",
//   },
//   {
//     date: "May 2023",
//     title: "Freelancer iti course",
//     location: "iti Assuit",
//     "sub-title": "Freelancer course",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repudiandae consectetur dolorem, quaerat aliquid cumque",
//   },
//   {
//     date: "May 2024",
//     title: "Freelancer iti course",
//     location: "iti Assuit",
//     "sub-title": "Freelancer course",
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repudiandae consectetur dolorem, quaerat aliquid cumque",
//   },
// ];



// Functions
function loadResumeHeader() {
  resume_div[0].innerHTML = resume_div_data["title"];
  resume_div[1].innerHTML = resume_div_data["subtitle"];
  resume_div[2].innerHTML = resume_div_data["description"];
}

function myExperiencesDataFunction(arrayData) {
  if (arrayData != null || arrayData != undefined) {
    var output = "";
    arrayData.forEach((object) => {
      output += ` <div class="custom-card">
        <div class="date">
            <i class="fa-solid fa-diamond"></i>
            <span>${object["date"]}</span> </div>
        <div class="card content">
            <h1 class="title"> ${object["title"]}</h1>
            <h6 class="spical">${object["location"]}</h6>
            <p>${object["description"]}</p>
        </div>
    </div>`;
    });
    resume_experance_div.innerHTML = output;
  }else{
    var temp = [
     
        {
          'date': "2020-11 - 2021-1",
          'title': "Online Training Web Development Program",
          'location': "Online",
          'description':
            "Online Training Course In Web Development Program Ministry Of Communications, Egypt 180 Hours Of Training In The Field Of Web Development Provided By The Ministry Of Communications,I learned the full-stack technices like  Front-end (html,css, js, jQuery,bootstrap, ajax), Back-end(php, laravel, SQL)",
        },
        {
          'date': "2022-1",
          'title': "Front-end Development Traning",
          'location': "Information technology institute(ITI)",
          'description':
            "Onlinetraining in Front-endDevelopment (120-hour) Basic of (html,css) and responsivedesign JavaScript, TypeScript and ES next Angularfundamentals ",
        },
        {
          'date': "2020-1",
          'title': "Soft Skills &Freelancing",
          'location': "Information technology institute(ITI) ",
          'description':
            "Softskills & Freelancing (24-hour) at the ITI Assuitcenter, The Trainning was about how to deail with online clients and how to use freelancing website like fiver, upwork and mostakel",
        },
        {
          'date': "2020-1",
          'title': "IT Essentials for CISCO",
          'location': "EEUL Assuit Center",
          'description':
            "IT Essentials for CISCO Continuing Learning Center, Egypt A course from Cisco for external and Internal maintenance of computers and Networks.",
        },
        {
          'date': "2018 – 2022",
          'title': "Bachelor ofInformation Technolog",
          'location': "EGYPTIANE-LEARNING UNIVERSITY ASSUIT CENTER",
         
          'description':
            "Modules included: introduction in computer and information technology, web engineering,artificial intelligence and security, (A+) at graduation project, 3.49 GPA (V.good)",
        },
      ];

      myExperiencesDataFunction(temp);



  }
}

function mySkillsBarFunction(arrayData) {
 
    if (arrayData != null || arrayData != undefined) {
        let output = "";
        arrayData.forEach((element) => {
          output += `<div class="progress-div">
              <p>${element["title"]}</p>
              <div class="progress-bar">
                  <div class="bar w-${element["presentge"]}">
                  </div>
              </div>
          </div>`;
        });
      
        skills_bars.innerHTML = output;
    }else{
        var skills_data = [
            {
              title: "HTML",
              presentge: 90,
            },
            {
              title: "CSS",
              presentge: 90,
            },
            {
              title: "Bootstrap",
              presentge: 85,
            },
            {
              title: "Java Script",
              presentge: 80,
            },
            {
              title: "Node.js",
              presentge: 55,
            },
            {
              title: "MongoBD",
              presentge: 50,
            },
            {
              title: "Firebase",
              presentge: 75,
            },
          ];
          mySkillsBarFunction(skills_data);
    }

}

//#endregion Resume

//#region Services

//Selectors
let services_cntainer = document.getElementById("services-cards");

// Function

function myServisesFunction(arrayData) {
 if (arrayData != null || arrayData != undefined) {
    let output = "";
    arrayData.forEach((element) => {
      output += `<div class="card">
          <div class="card-body text-center">
          <h5 class="card-title d-flex align-content-center justify-content-center gap-2 flex-column py-1">
        <i class="${element["class_icon"]}"></i>    
        ${element["title"]}</h5>
       <p class="card-text">${element["description"]}</p>
   </div>
   </div>`;
    });
    services_cntainer.innerHTML = output;
 }else{
    let myServicesData = [
        {
          'class_icon': "fa-solid fa-palette spical",
          'title': "UI/UX Design",
          'description':
            "I learned design on Adobe XD and Figma, you can see my latest work on the Behance website.",
        },
        {
          'class_icon': "fa-solid fa-code spical",
          'title': "Front-end Code",
          'description':
            "I can design responsive websites on all devices using html, css and Bootstrap.",
        },
        {
          'class_icon': "fa-solid fa-table spical",
          'title': "converting layout",
          'description':
            "I can design any shape you want in a short time by using modern  CSS3 techniques like flexbox and grid system",
        },
        {
          'class_icon': "fa-solid fa-laptop spical",
          'title': "E-commerce Websites",
          'description':
            "I can work on E-commerce websites, in terms of design and dealing with databases, as I have experience working with nodes.js",
        },
      ];

    myServisesFunction(myServicesData);
 }
}

//#endregion Services

//#region My Works

//Selectors
let works_container = document.getElementById("works_div");


// Functions
function myWorksFunctions(arrayData) {
 if (arrayData != null || arrayData !=undefined) {
    let output = "";
    arrayData.forEach((element) => {
      output += `<div class="card">
          <div class="card-body">
              <img src="${element["img_Src"]}"
                  alt="${element["title"]}">
          </div>
          <div class="cover">
              <h5>
              ${element["title"]}
              </h5>
              <p>${element["description"]}</p>
              <a
                  href="${element["project_link"]}"
                  class="btn" target="_blank">Go Visite
                  Site</a>
          </div>
      </div>`;
    });
    works_container.innerHTML = output;
 }else{

    let myWorksData = [
        {
          'img_Src': "imgs/my-work/Clean-book.png",
          'title': " Clean Book Website",
          'description': "Clean Code is designing a website to promote books",
          'project_link': "https://hassanali199912.github.io/Clean-Code-book/"
        },
        {
          'img_Src': "imgs/my-work/Graket.png",
          'title': "Graket Website",
          'description':
            "Graket Website is an educational website to display and watch educational courses as well",
          'project_link': "https://hassanali199912.github.io/Final-Graket/"
        },
        {
          'img_Src': "imgs/my-work/todolist.png",
          'title': " To Do Lite With js",
          'description':
            "A simple project in JavaScript to create a todo list project, and I used in it local storages such as cookies and sessions",
          'project_link': "https://hassanali199912.github.io/to-do-list/"
        },
        {
          'img_Src': "imgs/my-work/profile.png",
          'title': "My Old Portofilo",
          'description':
          "You can visit and browse the old portfolio, I created this site at the beginning and published some of my works on it.",
          'project_link': "https://hassanali199912.github.io/MyProtofilo/"
        },
        {
          'img_Src': "imgs/my-work/TTN.png",
          'title': "Multiple Tools Website",
          'description':
            "Some of the tools that are used to increase productivity, this site was made using Bootstrap and Javascrip",
          'project_link': "https://hassanali199912.github.io/TTN/"
        },
      ];
    myWorksFunctions(myWorksData);
 }
}

//#endregion My Works



// Firenase Connection -----------------------
//#region Connection

//header Data
await db.collection("header").get().then((querySnapshot) => {
    var my_titile = [];

    querySnapshot.forEach((doc) => {
      my_titile = doc.data()["my_titiles"];
    });

    loadHerderTitle(my_titile);
  });

// Resume Data
await db.collection("resume").orderBy("order","desc").get().then((querySnapshot) => {
    var experinces_date = [];
    querySnapshot.forEach((doc) => {
      experinces_date.push(doc.data());
    });
    myExperiencesDataFunction(experinces_date);
  });

  
// Skills Data
await db.collection('skils').orderBy('order').get().then((querySnapshot)=>{
        let skills_array = [];
        querySnapshot.forEach((doc)=>{
            skills_array.push(doc.data());
        })  ; 

        mySkillsBarFunction(skills_array);
   
});


// Services Data
await db.collection('services').get().then((querySnapshot)=>{
        let service_array = [];
        querySnapshot.forEach((doc)=>{
            service_array.push(doc.data());
        }); 

        myServisesFunction(service_array);
   
});


// Works Data
await db.collection('works').orderBy("order","desc").get().then((querySnapshot)=>{
        let works_array = [];
        querySnapshot.forEach((doc)=>{
            works_array.push(doc.data());
        }); 

        myWorksFunctions(works_array);
   
});



//#endregion Connection