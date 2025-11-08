// Generic utility function, which could be used to send form data to a server
const sendFormData = (data: FormData) => {
  // Simulate sending form data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 'success', data });
    }, 1000);
  });
};

export default sendFormData;
