import { BASE_URL, headers, answer } from "./cardsApi";


export const postNewsblock = (news) => {
    return fetch(`${BASE_URL}/newsblock`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            name: news.name,
            time: news.time,
            title: news.title,
            adress: news.adress,
            link: news.link
        })
    })
        .then(answer)
};

export const getNewsblock = () => {
    return fetch(`${BASE_URL}/newsblock`, {
        method: 'GET',
        headers: headers
    })
        .then(answer)
}