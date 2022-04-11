import { uploadPhoto, createUser } from 'util';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();

  return Promise.all([photo, user]).then(
    (result) => console.log(`${result[0].body} ${result[1].firstname} ${result[1].lastname}`),
    () => console.log('Signup system offline'),
  );
}
