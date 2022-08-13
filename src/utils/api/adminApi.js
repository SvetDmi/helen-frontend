import { BASE_URL, headers } from "./cardsApi";

export const adminEnter = (login, password) => {
    return fetch(`${BASE_URL}/admin`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ login, password })
    })
        .then((res => {
            let data = res.json();
            if (!res.ok) {
                return Promise.reject(res.status);
            }
            return data;
        }))
        .then((data) => {
            if (data) {
                localStorage.setItem('token', data.token);
                return data;
            }
        })
        .catch(err => console.log(err))
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/admin`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => data)

};



export const refreshHeaders = () => {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
}
