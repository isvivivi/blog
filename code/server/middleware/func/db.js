/*
 * 公共Add方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 */
export const add = (model, conditions) => {
  return new Promise((resolve, reject) => {
    model.create(conditions)
    .then((res) => {
      console.log("save success!");
      resolve(res);
    })
    .catch((err) => {
      console.error("Error: " + JSON.stringify(err));
      reject(err);
      return false;
    });
  });
};

/*
 * 公共update方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 * @param update 更新条件{set{id:xxx}}
 * @param options
 */
export const update = (model, conditions, update, options) => {
  return new Promise((resolve, reject) => {
    model.updateOne(conditions, update, options)
    .then((res) => {
      if (res.n !== 0) {
        console.log("update success!");
      } else {
        console.log("update fail:no this data!");
        return reject("update fail:no this data!");
      }
      resolve(res);
    })
    .catch((err) => {
      console.error("Error: " + JSON.stringify(err));
      reject(err);
      return false;
    });
  });
};


/**
 * 公共remove方法
 * @param model
 * @param conditions
 */

export const remove = (model, conditions) => {
  return new Promise((resolve, reject) => {
    model.deleteOne(conditions)
    .then((res) => {
      if (res.result !== 0) {
        console.log("remove success!");
      } else {
        console.log("remove fail:no this data!");
      }
      resolve(res);
    })
    .catch((err) => {
      console.error("Error: " + JSON.stringify(err));
      reject(err);
      return false;
    });
  });
};

/**
 * 公共find方法 非关联查找
 * @param model
 * @param conditions
 * @param fields 查找时限定的条件，如顺序，某些字段不查找等
 * @param options
 * @param callback
 */
export const find = async (model, conditions, fields, options = {}) => {
  let { sort } = options;
  delete options.sort;

  const getCount = () => {
    return new Promise((resolve, reject) => {
      model.find(conditions, fields)
      .count({})
        .then((res) => resolve(res))
        .catch((err) => {
          console.log("查询长度错误");
          return reject(err);
        });
    });
  };

  const count = await getCount();

  return new Promise((resolve, reject) => {
    model
      .find(conditions, fields, options)
      .then((res) => {
        if (res.length !== 0) {
          resolve({
            list: res,
            total: count,
          });
          console.log("find success!");
        } else {
          console.log("find fail:no this data!");
        }
        // resolve(res);
        resolve({
          list: res,
          total: count,
        });
      })
      .catch((err) => {
        console.error("Error: " + JSON.stringify(err));
        reject(err);
        return false;
      })
      // .sort(sort);
  });
};

/**
 * 公共findOne方法 非关联查找
 * @param model
 * @param conditions
 * @param fields 查找时限定的条件，如顺序，某些字段不查找等
 * @param options
 * @param callback
 */
export const findOne = (model, conditions, fields, options = {}) => {
  let { sort } = options;
  delete options.sort;
  return new Promise((resolve, reject) => {
    model
      .findOne(conditions, fields, options)
      .then((res) => {
        if (res) {
          console.log("find success!");
        } else {
          console.log("find fail:no this data!");
        }
        resolve(res);
      })
      .catch((err) => {
        console.error("Error: " + JSON.stringify(err));
        reject(err);
        return false;
      })
      // .sort(sort);
  });
};

export const findPage = async (model, conditions, fields, options = {}) => {
  let { sort } = options;
  delete options.sort;

  const getCount = () => {
    return new Promise((resolve, reject) => {
      model.find(conditions, fields).count({})
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log("查询长度错误");
        return reject(err);
      })
    });
  };

  const count = await getCount();

  return new Promise((resolve, reject) => {
    model.find(conditions, fields, options)
    .then((res) => {
      if (res.length !== 0) {
        console.log("find success!");
        resolve({
          list: res,
          total: count,
        });
      } else {
        console.log("find fail:no this data!");
        resolve({
          list: res,
          total: count,
        });
      }
    })
    .catch((err) => {
      console.error("Error: " + JSON.stringify(err));
      reject(err);
      return false;
    })
  });
};

/*
 * 公共aggregate方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件,如{id:xxx}
 */
export const aggregate = (model, conditions) => {
  return new Promise((resolve, reject) => {
    model.aggregate(conditions)
    .then((res) => {
      console.log("aggregate success!");
      resolve(res);
    })
    .catch((err) => {
      console.error("Error: " + JSON.stringify(err));
      reject(err);
      return false;
    })
  });
};
