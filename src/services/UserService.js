const url = 'http://localhost:8080/api/v1/habit'
export default new UserService();

class UserService {

    async getUserByUserName(username) {
        const response = await fetch(url + "/" + username);
        return await response.json();
    }

    async addUser(data) {
        const response = await fetch(url, {
            method: 'POST',
            headers:
                {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async updateUserDataById(data, id) {
        const response = await fetch(url + "/update?idUser=" + id, {
            method: 'PUT',
            headers:
                {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async getUserHabitsById(id) {
        const response = await fetch(url + "/habits/" + id);
        return await response.json();
    }
}

