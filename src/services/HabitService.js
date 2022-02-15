const url = 'http://localhost:8080/api/v1/habit'
export default new HabitService();

class HabitService {

    async addHabit(data) {
        const response = await fetch(url, {
            method: 'POST',
            headers:
                {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(data),
            param
        });

        return await response.json();
    }


    async findHabitById(id) {
        const response = await fetch(url + "/" + id);
        return await response.json();
    }

}
