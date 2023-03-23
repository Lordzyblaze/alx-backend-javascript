function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'photo-profile-1' });
    reject(Error('The fake API is not working currently'));
  });
}

export default getFullResponseFromAPI;
