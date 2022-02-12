const url = 'http://localhost:8080/api/v1/habit'
export default new UserService();

class UserService {

    async getUserByUserName(username) {
        const response = await fetch(url + "/" + username);
        return response.json();
    }

    async addUser(data) {
        const response = await fetch(url, {
            method: 'POST',
            // body: ___ --- FIXME: в соответствуещем методе в API в body ожидается объект класса User
        });
        return response.json();
    }

    async updateUserDataById(id) {
        const response = await fetch(url + "/update/" + id, {
            method: 'PUT',
            // body: ___ --- FIXME: в соответствуещем методе в API в body ожидается объект класса User
        });
        return response.json();
    }

    async getUserHabitsById(id) {
        const response = await fetch(url + "/habits/" + id);
        return response.json();
    }
}

