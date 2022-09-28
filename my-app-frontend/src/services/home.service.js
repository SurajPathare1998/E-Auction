import httpClient from '../http-common';

const aboutus = () => {
    return httpClient.get('');
  };
  
const help = () => {
    return httpClient.get('');
  };

const faq = () => {
    return httpClient.get('');
  };

// const welcome = () => {
//     return httpClient.get('');
//   };
  
// const register = () => {
//     return httpClient.get('');
//   };
  
// const registeruser = (data) => {
//     return httpClient.post('', data);
//   };
  
// // const welcome = () => {
// //     return httpClient.delete('');
// //   };

// // export default { login, Login, register, Register, welcome };
export default { login };