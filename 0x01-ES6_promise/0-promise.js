export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'photo-profile-1' });
});
}
