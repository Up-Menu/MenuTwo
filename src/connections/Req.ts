import Api from 'src/api/Api';

export const GoogleReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/Account/SSO', value, '')
    .then(response => {
      fn([response.data.status, response.data.data]);
    })
    .catch(err => console.log(err));
};

export const RegisterReq = (value: any) => {
  Api
    .post('/api/Member', value, '')
    .then(response => {
      // fn([response.data.status, response.data.data]);

      console.log(response)
    })
    .catch(err => console.log(err));
};

export const LoginReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/Account/Login', value, '')
    .then(response => {
      fn([response.data.status, response.data.data.message, response.data.data.userId]);
    })
    .catch(err => console.log(err));
};
export const CreateRestaurantReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/Restaurant/CreateOrUpdateRestaurant', value, '')
    .then(response => {
      fn([response.data.status, response.data.data.message, response.data.data.restaurant.restaurantId]);
    })
    .catch(err => console.log(err));
};
export const CreateCategoryReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/Category/CreateCategory', value, '')
    .then(response => {
      fn([response.data.status, response.data.data.message, response.data.data.category.categoryId]);
    })
    .catch(err => console.log(err));
};
export const DeleteCategory = (categoryId: string, fn: (arg0: any) => void) => {
  Api
    .post(`/Category/DeleteCategory/?categoryId=${categoryId}`, categoryId, '')
    .then(response => {
      fn([response.data.status, response.data.data.message]);
    })
    .catch(err => console.log(err));
};
export const CreateMenuReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/Food/CreateFood', value, '')
    .then(response => {
      fn([response.data.status, response.data.data.message]);
    })
    .catch(err => console.log(err));
};
export const DeleteFood = (foodId: string, fn: (arg0: any) => void) => {
  Api
    .post(`/Food/DeleteFood/?foodId=${foodId}`, foodId, '')
    .then(response => {
      fn([response.data.status, response.data.data.message]);
    })
    .catch(err => console.log(err));
};


export const CreateTableReq = (value: any, fn: (arg0: any) => void) => {
  Api
    .post('/TableManagment/CreateTable', value, '')
    .then(response => {
      fn([response.data.status, response.data.data.message]);
    })
    .catch(err => console.log(err));
};
export const DeleteTable = (tableId: string, fn: (arg0: any) => void) => {
  Api
    .post(`/TableManagment/DeleteTable/?tableId=${tableId}`, tableId, '')
    .then(response => {
      fn([response.data.status, response.data.data.message]);
    })
    .catch(err => console.log(err));
};


export const GetUserRestaurant = (userId: any, fn: (arg0: any) => void) => {
  Api
    .get(`/Restaurant/GetUserRestaurant?userId=${userId}`, '', '')
    .then(response => {
      fn(response);
    })
    .catch(err => console.log(err));
};


export const GetRestaurantCategories = (restaurantId: any, fn: (arg0: any) => void) => {
  Api
    .get(`Category/GetRestaurantCategories?restaurantId=${restaurantId}`, '', '')
    .then(response => {
      fn(response.data.data.restaurantCategories);
    })
    .catch(err => console.log(err));
};

export const GetRestaurantMenus = (restaurantId: any, fn: (arg0: any) => void) => {
  Api
    .get(`Food/GetRestaurantFoods?restaurantId=${restaurantId}`, '', '')
    .then(response => {
      fn(response.data.data.categoryFoods);
    })
    .catch(err => console.log(err));
};
export const GetRestaurantTables = (restaurantId: any, fn: (arg0: any) => void) => {
  Api
    .get(`TableManagment/GetRestaurantTables?restaurantId=${restaurantId}`, '', '')
    .then(response => {
      fn(response.data.data.restaurantTables);
    })
    .catch(err => console.log(err));
};