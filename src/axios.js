import axios from 'axios';


const instance = axios.create({
     baseURL: 'http://localhost:5001/challenge-c052e/us-central1/api' , //THE API (cloud funcion ) URL

 });
export default instance;