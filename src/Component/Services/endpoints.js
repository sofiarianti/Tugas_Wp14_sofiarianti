const endpoints = {
  penelitian: {
    getAll: '/api/pen',
    getById: (id) => `/api/pen/${id}`,
    create: '/api/pen/insert',
    update: (id) => `/api/pen/update/${id}`,
    delete: (id) => `/api/pen/delete/${id}`,
  },
};

export default endpoints;
