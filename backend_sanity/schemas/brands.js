export default {
  name: "bands",
  title: "Bands",
  type: "document",
  fields: [
    {
      name: "imageurl",
      title: "ImgURL",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
  ],
};
