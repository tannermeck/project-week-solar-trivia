export function createUser(formData) {
    return {
        name: formData.get('name'),
        race: formData.get('race'),
        score: 0,
        completed: []
    };
}
