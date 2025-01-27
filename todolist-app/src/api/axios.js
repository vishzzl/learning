import axios from "axios";
const api = axios.create({
  baseURL:
    "https://automatic-space-fortnight-7wvr6pgj9x7cx4r6-5136.app.github.dev/api", // Your .NET API base URL
  timeout: 10000, // Adjust as needed
  headers: {
    "Content-Type": "application/json",
  },
  // Enable if your API uses cookies/auth headers
  withCredentials: true,
});

export default api;
