export function getById(iterable, id) {
    for (let item of iterable) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}