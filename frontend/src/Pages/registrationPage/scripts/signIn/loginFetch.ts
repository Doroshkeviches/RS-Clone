export function loginFetch(username: string, password: string) {
  const message = document.getElementById('message') as HTMLElement;
  fetch(`http://localhost:5000/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      password: `${password}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.token) {
        message.innerHTML = `${data.message}`;
      } else {
        //TODO перенаправление на след. страницу
      }
    });
}
