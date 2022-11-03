const PostAPI = {};

const postRequest = (url, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("bearer-token")
        },
        body: data,
    });
};

const getRequest = (url) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("bearer-token")
        },
    });
};

PostAPI.getTodo = () =>
    getRequest('http://localhost:9081/api/getTodo').then((x) => x.json());

PostAPI.addTask = (task) =>
    postRequest('http://localhost:9081/api/addTask', task);

PostAPI.updateStatus = (taskId) =>
    postRequest('http://localhost:9081/api/updateStatus', taskId);

PostAPI.deleteTask = (taskId) =>
    postRequest('http://localhost:9081/api/deleteTask', taskId);

PostAPI.updateHeading = (title) =>
    postRequest('http://localhost:9081/api/updateHeading', title);

PostAPI.resetTodo = () => postRequest('http://localhost:9081/api/resetTodo');

export default PostAPI;
