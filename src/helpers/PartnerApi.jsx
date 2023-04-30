import axios from "axios";

const BASE_URL = "https://lazy-gray-cocoon-wrap.cyclic.app/api/partner";

export async function registerPartner(partnerdetails) {
  try {
    const {
      data: { msg },
    } = await axios.post(`${BASE_URL}/add`, partnerdetails);

    if (msg === "success") return Promise.resolve();
    else return Promise.reject(msg);
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function showAllPartners() {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    //console.log(data)
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err.message);
  }
}