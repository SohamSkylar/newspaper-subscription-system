import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { paymentRequest } from "../helpers/PaymentApi";
import { toast } from "react-hot-toast";

const StripeGateway = ({ sub_id, paperID, paperDetails }) => {
  const [token, setToken] = useState("");

  const tokenHandler = (token) => {
    setToken(token);
    paymentHandler();
  };

  const paymentHandler = () => {
    let toastBox = toast.loading("Payment Processing...");
    paper[0].paper_id = paperID;
    const paymentRequestPromise = paymentRequest(token, paper[0]);
    paymentRequestPromise.then(
      () => {
        toast.success("Successfully Purchased!", {
          id: toastBox,
        });
      },
      (msg) => {
        toast.error(`${msg}`, {
          id: toastBox,
        });
      }
    );
  };

  let paper = paperDetails.filter((element) => {
    return element.sub_id.toString() === sub_id.toString();
  });

  return (
    <>
      <StripeCheckout
        name="PAPERPORTAL"
        amount={Number(paper[0].price) * 100}
        currency="INR"
        token={tokenHandler}
        stripeKey="pk_test_51MhcS0SEQsEMOguBBH6PnGCz8nCNfhGfpZo42EIfBV9MBTykymiJd6tSCsTeFwycvzrJbEcqQILBrKwq44j7ky7j00CZmJq9ds"
      >
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm sm:mt-0 sm:w-auto bg-rose-500 hover:bg-rose-700"
        >
          Pay Now
        </button>
      </StripeCheckout>
    </>
  );
};

export default StripeGateway;
