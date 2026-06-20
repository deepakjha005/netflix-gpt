export const validateInputFields = (email, password) => {
  console.log(email, password);
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  if (!emailRegex.test(email)) {
    return "Please enter the valid email.";
  }
  if (!passwordRegex.test(password)) {
    return "Please enter the valid Password.";
  }
  return null;
};
