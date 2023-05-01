import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeGateway = ({sub_id, paperDetails}) => {

    const tokenHandler = (token) => {
      console.log(token)
    }

    const paper = paperDetails.filter((element) => {
      return element.sub_id.toString() === sub_id.toString()
    })

  return (
    <StripeCheckout 
    name="PAPERPORTAL"
    amount={Number(paper[0].price) * 100}
    currency="INR"
    token={tokenHandler}
    stripeKey='pk_test_51MhcS0SEQsEMOguBBH6PnGCz8nCNfhGfpZo42EIfBV9MBTykymiJd6tSCsTeFwycvzrJbEcqQILBrKwq44j7ky7j00CZmJq9ds'
    >
      {console.log(paper[0])}
        <button type='button' className='p-2 px-2 text-sm font-medium text-gray-800 bg-green-500'>Pay Now</button>
    </StripeCheckout>
  )
}

export default StripeGateway