const PostAPI = {};

const postRequest = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
};

PostAPI.getTodo = () =>
  fetch('http://localhost:8080/api/getTodo').then((x) => x.json());

PostAPI.addTask = (task) =>
  postRequest('http://localhost:8080/api/addTask', task);

PostAPI.updateStatus = (taskId) =>
  postRequest('http://localhost:8080/api/updateStatus', taskId);

PostAPI.deleteTask = (taskId) =>
  postRequest('http://localhost:8080/api/deleteTask', taskId);

PostAPI.updateHeading = (title) =>
  postRequest('http://localhost:8080/api/updateHeading', title);

PostAPI.resetTodo = () => postRequest('http://localhost:8080/api/resetTodo');

export default PostAPI;
