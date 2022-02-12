// const data = 'Some Data'
const url = 'http://localhost:8080/api/v1/habit'
export default new HabitService();

class HabitService {

    async addHabit(data) {
        const response = await fetch(url, {
            method: 'POST',
            // headers: {'Content-Type': 'application/json'},
            // credentials: 'include',
            // body: ___ --- FIXME: в соответствуещем методе в API в body ожидается объект класса Habit
        });

        return response.json();
    }


    async findHabitById(id) {
        const response = await fetch(url + "/" + id);
        return response.json();
    }

}
