export function getAll() {
    return fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
        .then(res => res.json())
}