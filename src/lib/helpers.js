//Get token from local storage
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("fast-hands-token"));
  return token;
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("fast-hands-user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};
