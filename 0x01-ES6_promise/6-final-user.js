import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	  const userinfo = await signUpUser(firstName, lastName).then((data) => ({
		      status: 'fulfilled',
		      value: data,
		    }));

	  const fileinfo = await uploadPhoto(fileName).catch((err) => ({
		      status: 'rejected',
		      value: err.toString(),
		    }));

	  return Promise.resolve([userinfo, fileinfo]);
}
