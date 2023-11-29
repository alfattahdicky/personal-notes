export const note = {
  id: +new Date(),
  title: '',
  body: '',
  archived: false,
  createdAt: new Date().toISOString(),
};

export const categorys = [
  {
    id: 1,
    title: 'All',
    status: true,
  },
  {
    id: 2,
    title: 'Archived',
    status: false,
  },
];
