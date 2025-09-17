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

export {
  roles,
  relationships,
  diagnosesOptions,
  servicesOptions,
  strugglingAreaOptions,
  struggleEffectOptions,
  maxLiveTimeOptions,
  siblingsOptions,
};
