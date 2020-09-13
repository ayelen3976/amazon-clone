import axios from 'axios';


const instance = axios.create({
     // baseURL: 'https://boiling-plateau-90297.herokuapp.com/' , //THE API (cloud funcion ) URL
baseURL:'http://localhost:5001/challenge-c052e/us-central1/api'
  
});
export default instance;