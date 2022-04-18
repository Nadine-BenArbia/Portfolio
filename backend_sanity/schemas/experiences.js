export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
};
