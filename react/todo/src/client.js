import axios from "axios";

const getAllUsers = (cb) => {
    return axios.get("http://localhost:3050/getAllUsers")
      .then((response) => {
        cb({
          "type": "create",
          "data": response.data
        })
    }) 
};

const addUser = (name,college,dispatch) => {
    return axios.post('http://localhost:3050/addUser',{
        name: name,
        college: college
    }).then(() => {
        getAllUsers(dispatch);
      }).catch((error) => {
        console.log(error);
      });
}

const deleteUser = (id,dispatch) => {
  // console.log(id);
    return axios.delete(`http://localhost:3050/deleteUser?id=${id}`).then(() => {
        getAllUsers(dispatch);
      }).catch((error) => {
        console.log(error);
      });
}

const updateUser = (id, updatedValues, dispatch) => {
  axios.put('http://localhost:3050/updateUser', {
      "id": id,
      "updatedVal": updatedValues
  })
  .then(res => {
      getAllUsers(dispatch)
  })
}

export { 
    addUser, 
    getAllUsers, 
    deleteUser,
    updateUser
};