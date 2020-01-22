const request = method => (url, body) => {
  return fetch(url, {
    method: method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
};

export const server = {
  get: request('GET'),
  patch: request('PATCH'),
  post: request('POST'),
  delete: request('DELETE')
};
