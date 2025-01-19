export function getSpecials(obj) {
    const { special } = obj;
    let result = [];
    special.forEach(({ id, name, description = 'Описание недоступно', icon}) => {
        result.push({ id, name, description, icon})
    });
    return result;
}
