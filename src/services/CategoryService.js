const url = 'http://localhost:8080/api/v1/habit';
export default new CategoryService();

class CategoryService {

    async getAllCategories() {
        const response = await fetch(url + "/all");
        return await response.json();
    }

    async getTopCategories() {
        const response = await fetch(url + "/top");
        return await response.json();
    }

    async findCategoryById(id) {
        const response = await fetch(url + "/" + id);
        return await response.json();
    }
}

