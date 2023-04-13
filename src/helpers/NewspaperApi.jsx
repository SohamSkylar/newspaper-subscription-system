import axios from "axios";

const BASE_URL = "http://localhost:8001/api/paper";

export async function addNewspaper(paperdetails) {
    try {
      const {
        data: { msg },
      } = await axios.post(`${BASE_URL}/add`, paperdetails);
  
      if (msg === "success") return Promise.resolve();
      else return Promise.reject(msg);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }