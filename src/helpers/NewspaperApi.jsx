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

  export async function showAllPapers() {
    try {
      const { data } = await axios.get(`${BASE_URL}`);
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message);
    }
  }

  export async function showAllPaperSub() {
    try {
      const { data } = await axios.get(`${BASE_URL}/sub`);
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message);
    }
  }