const baseURL = 'http://localhost:3030/jstore';

export const create = async (gameData) => {
    const response = await fetch(`${baseURL}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
}