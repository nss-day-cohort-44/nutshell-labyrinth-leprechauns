let users = [];

export const useUsers = () => users.slice();

export const getUsers = () => {
    return fetch(`http://localhost:8088/users`)
    .then(response => response.json())
    .then(response => users = response);
}

export const getUserByUserId = (id) => users.find(user => user.id === id);