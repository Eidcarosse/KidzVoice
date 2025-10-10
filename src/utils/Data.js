import colors from "./AppColors";

const roles = [
  { id: 1, label: "parent", title: "Parent" },
  { id: 2, label: "coach", title: "Be a coach" },
  { id: 3, label: "learner", title: "Learner" },
];

const relationships = [
  { id: 1, label: "parents", title: "Parents" },
  { id: 2, label: "brother", title: "Elder Brother" },
  { id: 3, label: "other", title: "Other Guardian" },
];

const gradesList = [
  { id: 1, label: "nursery", title: "Nursery" },
  { id: 2, label: "kindergarten", title: "Kindergarten" },
  { id: 3, label: "primary", title: "Primary" },
  { id: 4, label: "middle", title: "Middle" },
  { id: 5, label: "highSchool", title: "High School" },
  { id: 6, label: "collegeUniversity", title: "College/University" },
];

const schoolsList = [
  { id: 1, label: "roots", title: "Roots Millennium Schools" },
  { id: 2, label: "froebels", title: "Froebel’s International School" },
  {
    id: 3,
    label: "pakTurk",
    title: "Pak-Turk Maarif International Schools & Colleges",
  },
  {
    id: 4,
    label: "sheikhZayed",
    title: "Sheikh Zayed International Academy (SZIA)",
  },
];

const currencyList = [
  { id: 1, label: "usd", title: "USD" },
  { id: 2, label: "pkr", title: "PKR" },
  { id: 3, label: "other", title: "Other" },
];

const diagnosesOptions = [
  "ADHD",
  "Autism Spectrum Disorder",
  "Learning Disability",
  "None",
  "Other",
];

const servicesOptions = [
  "Speech therapy",
  "Occupational therapy",
  "Counseling/psychology",
  "None",
  "Other",
];

const strugglingAreaOptions = [
  "Concentration/attention",
  "Reading/writing",
  "Math",
  "Emotional regulation (anger, anxiety, sadness)",
  "Social interactions (making/keeping friends)",
  "Other",
];

const struggleEffectOptions = ["Rarely", "Sometimes", "Often", "Almost always"];

const maxLiveTimeOptions = [
  "Both parents",
  "Single parent",
  "Guardian",
  "Other",
];

const siblingsOptions = ["Yes", "No"];

const modules = [
  {
    id: 1,
    title: "Module 1: Introduction to Psychology",
    subTitle: "CBT | Diagnosis | Crisis Care.......",
    language: "English",
    time: "1h 20m",
    mediaType: "Videos",
    moduleType: "Quiz",
    description:
      "lic. phil. & Dipl. Psych., licensed psychotherapist Depth psychology, cognitive behavioral therapy,",
    inProgress: true,
    progress: "62%",
  },
  {
    id: 2,
    title: "Module 2: Safeguarding",
    subTitle: "CBT | Diagnosis | Crisis Care.......",
    language: "English",
    time: "1h 20m",
    mediaType: "Videos",
    moduleType: "Quiz",
    description:
      "lic. phil. & Dipl. Psych., licensed psychotherapist Depth psychology, cognitive behavioral therapy,",
    inProgress: false,
    progress: "",
  },
  {
    id: 3,
    title: "Final Project",
    subTitle: "CBT | Diagnosis | Crisis Care.......",
    language: "English",
    time: "1h 20m",
    mediaType: "Videos",
    moduleType: "Quiz",
    description:
      "lic. phil. & Dipl. Psych., licensed psychotherapist Depth psychology, cognitive behavioral therapy,",
    inProgress: false,
    progress: "",
  },
];

const tasks = [
  {
    id: 1,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
  },

  {
    id: 2,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
  },

  {
    id: 3,
    title: "Emotions the hidden message ",
    duration: "",
    inProgress: false,
  },

  {
    id: 4,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
  },

  {
    id: 5,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
  },

  {
    id: 6,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
  },
];

const childProgreeData = [
  { value: 6, max: 10, color: colors.anakiwa, title: "Meetings" }, // Meetings
  { value: 13, max: 20, color: colors.sunDown, title: "Assignments" }, // Assignments
  { value: 23, max: 30, color: colors.grandis, title: "Activities" }, // Activities
];

const youtubeVideosList = [
  {
    id: "eal4-A89IWY",
    title: "Psychology Preview",
    thumbnail: "https://img.youtube.com/vi/vo4pMVb0R6M/hqdefault.jpg",
  },
  {
    id: "vo4pMVb0R6M",
    title: "Intro to Psychology",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "hFV71QPvX2I",
    title: "Psychological Research",
    thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg",
  },
  {
    id: "W4N-7AlzK7s",
    title: "The Chemical Mind:",
    thumbnail: "https://img.youtube.com/vi/vo4pMVb0R6M/hqdefault.jpg",
  },
  {
    id: "vHrmiy4W9C0",
    title: "Meet Your Master - Getting to Know Your Brain",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "unWnZvXJH2o",
    title: "Sensation and Perception",
    thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg",
  },

  {
    id: "fxZWtc0mYpQ",
    title: "Homunculus",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    id: "n46umYA_4dM",
    title: "Perceiving is Believing",
    thumbnail: "https://img.youtube.com/vi/3tmd-ClpJxA/hqdefault.jpg",
  },
];

export {
  roles,
  relationships,
  diagnosesOptions,
  servicesOptions,
  strugglingAreaOptions,
  struggleEffectOptions,
  maxLiveTimeOptions,
  siblingsOptions,
  currencyList,
  modules,
  tasks,
  childProgreeData,
  gradesList,
  schoolsList,
  youtubeVideosList,
};
