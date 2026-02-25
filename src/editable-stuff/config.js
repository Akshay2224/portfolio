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
  message:
    "Software Developer with 5+ years of experience building scalable microservices and cloud-native applications using Java 17/21, Spring Boot, Spring Cloud, REST APIs, GraphQL, and event-driven architectures.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Akshay2224",
    },
    {
      image: "fa-linkedin",
      // Your resume just says “LinkedIn” (no URL). Keeping your existing LinkedIn URL.
      url: "https://www.linkedin.com/in/akshay-khan-97988a390/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/akshay.jpg"),
  imageSize: 375,
  message:
    "I’m Akshay Khan, a Software Developer focused on building reliable, high-performance backend systems. I work primarily with Java (17/21), Spring Boot/Spring Cloud, microservices, REST/GraphQL APIs, and event-driven systems using Kafka/RabbitMQ. I’ve deployed and operated services on AWS/Azure/GCP with Docker, Kubernetes, and CI/CD pipelines, and I care about security, observability, and performance tuning.",
  // Keep your existing resume link unless you want to replace it with a new one.
  resume:
    "https://drive.google.com/file/d/1PusxVJet0qK-Qw1bLRnO67aLpJ7gUybt/view?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Akshay2224",
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java (17/21)", value: 90 },
    { name: "Spring Boot / Spring Cloud", value: 88 },
    { name: "Microservices", value: 88 },
    { name: "REST APIs", value: 85 },
    { name: "GraphQL", value: 75 },
    { name: "Kafka", value: 82 },
    { name: "RabbitMQ", value: 75 },
    { name: "AWS (ECS/EKS/Lambda/RDS/S3)", value: 80 },
    { name: "Docker", value: 82 },
    { name: "Kubernetes (EKS/GKE/AKS)", value: 75 },
    { name: "CI/CD (Jenkins/GitHub Actions/Azure DevOps)", value: 78 },
    { name: "PostgreSQL / MySQL", value: 80 },
    { name: "MongoDB", value: 70 },
    { name: "Redis (Caching)", value: 70 },
    { name: "Python", value: 65 },
    { name: "JavaScript", value: 60 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 85 },
    { name: "Communication", value: 80 },
    { name: "Ownership", value: 85 },
    { name: "Collaboration", value: 80 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Developer opportunities. If you know of any openings or want to connect, feel free to email me at",
  email: "khanakshayy@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Software Developer",
      companyName: "American Express, USA",
      date: "Oct 2024 – Present",
    },
    {
      role: "Software Developer",
      companyName: "Infosys, India",
      date: "Mar 2020 – Dec 2023",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };