const hostname = window.location.hostname
console.log("hostname: ",hostname);
export const BASE_URL = hostname === "localhost" ? "http://170.2.2.219:8000" : "https://portfolio-backend-q8sf.onrender.com"