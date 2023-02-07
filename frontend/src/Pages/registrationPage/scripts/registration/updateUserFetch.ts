export function updateUserFetch(
  username: string,
  name: string,
  gender: string,
  weight: string,
  height: string,
  age: string,
  activity: string
) {
  fetch(`http://localhost:5000/auth/updateUser`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: `${username}`,
      name: `${name}`,
      gender: `${gender}`,
      activity: `${activity}`,
      weight: `${weight}`,
      height: `${height}`,
      age: `${age}`,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      //TODO render Next Page
    });
}
