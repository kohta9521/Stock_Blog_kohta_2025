// export type Blog = {
//   id: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   title: string;
//   topImage: {
//     url: string;
//     width: number;
//     height: number;
//   };
//   body: string;
//   tags: {
//     id: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     name: string;
//   };
// };

export type Blog = {
  id: string;
  link: string;
  imageInsideTag: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  category: {
    id: string;
    name: string;
  };
  date: string;
  title: string;
  body: string;
  tags: [
    {
      id: string;
      sample: string;
    }
  ];
};
