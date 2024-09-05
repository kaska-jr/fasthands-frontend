//Get token from local storage
export const getToken = () => {
  const token = localStorage.getItem("fast-hands-token");
  return token;
};
