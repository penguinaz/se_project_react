const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then((res) => checkResponse(res));
};

export const getClothing = () => {
  return fetch(`${baseUrl}/items`).then((res) => checkResponse(res));
};

export const postClothing = ({ name, imageUrl, weather, id }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
      _id: id,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteClothing = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => checkResponse(res));
};
