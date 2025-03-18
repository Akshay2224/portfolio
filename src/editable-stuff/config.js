// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Akshay",
  middleName: "",
  lastName: "Khan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Akshay2224",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/akshay-k-336149356/",
    }
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/akshay.jpg"),
  imageSize: 375,
  message:
    "My name is Akshay Khan. I’m a graduate of 2024 from  University of Central Missouri with a degree in Computer Information and Systems. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1_0N4YJmh3gkAr_9FbT5H7IK0iwM-H7vZ/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Akshay2224", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [
    
  ],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Javascript", value: 85 },
    { name: "Cypress", value: 90 },
    { name: "Node Js", value: 75 },
    { name: "Python", value: 75 },
    { name: "Selenium", value: 75 },
    { name: "React", value: 65 },
    { name: "Java", value: 60 },


  ],
  softSkills: [
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Development! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "akshaykhan4776@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Developer',
      companyName: "Tata Consultancy Services",
      date: 'October 2024 – Present',
    },
    {
      role: 'Software Developer',
      companyName: "Emerson",
      date: 'June 2020 – December 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
