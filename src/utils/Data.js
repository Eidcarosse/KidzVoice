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
    title: "Module 1: Safeguarding",
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

  {
    id: 7,
    title: "Emotions the hidden message ",
    duration: "2:40",
    inProgress: false,
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
};
