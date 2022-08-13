// export const BASE_URL = 'http://localhost:5000/api';

export const BASE_URL = "https://helen.spb.ru/api";

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const answer = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getCards = () => {
  return fetch(`${BASE_URL}/poems`, {
    method: "GET",
    headers: headers,
  }).then(answer);
};

// export const getCardById = (id) => {
//     return fetch(`${BASE_URL}/poems/card/${id}`, {
//         method: 'GET',
//         headers: headers
//     })
//         .then(answer)
// }

export const getCardById = async (cardId) => {
  const res = await fetch(`${BASE_URL}/poems/` + cardId);
  return await res.json();
};

export const postCard = (card) => {
  return fetch(`${BASE_URL}/poems`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      title: card.title,
      text: card.text,
      wrote: card.wrote,
      year: card.year,
      image: card.image,
      tags: card.tags,
      series: card.series,
    }),
  }).then(answer);
};

export const editCard = (card) => {
  return fetch(`${BASE_URL}/poems/${card._id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify({
      title: card.title,
      text: card.text,
      wrote: card.wrote,
      year: card.year,
      image: card.image,
      tags: card.tags,
      series: card.series,
    }),
  }).then(answer);
  // .then((data) => {
  //     console.log(data);
  // })
};

export const deleteCard = (card) => {
  return fetch(`${BASE_URL}/poems/${card._id}`, {
    method: "DELETE",
    headers: headers,
  }).then(answer);
};

// .then((res => {
//     let data = res.json();
//     if (!res.ok) {
//         return Promise.reject({code: res.status});
//     }
//     return data;
// }))

// .then((data) => {
//     console.log(data);
// })

export const getSeries = () => {
  return fetch(`${BASE_URL}/post`, {
    method: "GET",
    headers: headers,
  }).then(answer);
};

export const postSeria = (ser) => {
  return fetch(`${BASE_URL}/post`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      myId: ser.myId,
      value: ser.value,
      name: ser.name,
    }),
  }).then(answer);
};
