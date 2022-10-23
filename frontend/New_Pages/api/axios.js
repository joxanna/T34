import axios from "axios";

export default axios.create({
   baseURL: 'market34.up.railway.app',
   //baseURL: 'http://127.0.0.1:3000',
   withCredentials: true,
   xsrfHeaderName : "X-CSRFToken",
   xsrfCookieName : 'csrftoken',
});