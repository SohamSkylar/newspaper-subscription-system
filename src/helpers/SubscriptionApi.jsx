import axios from "axios";

const BASE_URL = "https://newspaper-api-1.onrender.com/api/subs";

export async function addSubType(subdetails) {
    try {
      const {
        data: { msg },
      } = await axios.post(`${BASE_URL}/type/add`, subdetails);
  
      if (msg === "success") return Promise.resolve();
      else return Promise.reject(msg);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  export async function showAllSubType() {
    try {
      const { data } = await axios.get(`${BASE_URL}/type`);
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message);
    }
  }

  export async function addPaperSub(subdetails) {
    try {
      const {
        data: { msg },
      } = await axios.post(`${BASE_URL}/paper/add`, subdetails);
  
      if (msg === "success") return Promise.resolve();
      else return Promise.reject(msg);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  export async function showPaperSub(paper_id) {
    try {
      const {data} = await axios.get(`${BASE_URL}/paper/specific/${paper_id}`);
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message);
    }
  }

  export async function addCustomerSub(subdetails) {
    
    try {
      const userToken = await localStorage.getItem("token");
      const {
        data: { msg },
      } = await axios.post(`${BASE_URL}/customer/add`, subdetails, {
        headers: { Authorization: `Bearer ${userToken}` },
      });
  
      if (msg === "success") return Promise.resolve();
      else return Promise.reject(msg);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  export async function showCustomerSub() {
    try {
      const userToken = await localStorage.getItem("token");
      const {data} = await axios.get(`${BASE_URL}/customer`, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      return Promise.resolve(data);
    } catch (err) {
      return Promise.reject(err.message);
    }
  }