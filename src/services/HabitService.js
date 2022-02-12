const data = 'Some Data'
const url = 'http://localhost:8080/api/v1/habit'

class HabitService {
    //
    // addHabit(url, data) {
    //     const response = fetch(url, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         credentials: 'include',
    //         body: JSON.stringify(data)
    //     })
    //     return response.json();
    // }


    async findHabitById(id) {
        const response = await fetch(url + "/" + id);
        console.log(response)
        return response;
    }

}

export default new HabitService();