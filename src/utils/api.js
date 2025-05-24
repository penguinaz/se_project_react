const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export const getClothing = () => {
  return fetch(`${baseUrl}/items`).then((res) => checkResponse(res));
};

export const postClothing = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, weather: weather, imageUrl: imageUrl }),
  }).then((res) => checkResponse(res));
};

export const deleteClothing = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => checkResponse(res));
};
