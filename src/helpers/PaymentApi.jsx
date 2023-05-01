import axios from "axios";

const BASE_URL = "https://lazy-gray-cocoon-wrap.cyclic.app/api/payment";

export async function paymentRequest(paymentdetails, subDetails) {

  const customDetails = {
    token: paymentdetails.id,
    email: paymentdetails.email,
    cust_id: subDetails.cust_id,
    sub_id: subDetails.sub_id,
    paper_id: subDetails.paper_id,
    amount: subDetails.price
  }
  try {
    const userToken = await localStorage.getItem("token");
    const {
      data: { msg },
    } = await axios.post(`${BASE_URL}/create-payment-intent`, customDetails, {
      headers: { Authorization: `Bearer ${userToken}` },
    });

    if (msg === "success") return Promise.resolve();
    else return Promise.reject(msg);
  } catch (error) {
    return Promise.reject(error.message);
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