import {uploadPhoto, createUser} from 'util';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  
}