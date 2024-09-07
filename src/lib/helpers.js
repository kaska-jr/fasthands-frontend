//Get token from local storage
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("fast-hands-token"));
  return token;
};
