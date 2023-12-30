import axios from 'axios';
import { ApiError } from '../../utils/Apierror.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import makeAuthApi from './auth.js'; // Add the correct path to your getToken function

const getAccessToken=asyncHandler(async()=>{
try {
  console.log("API called")
  const token =  makeAuthApi();
  // console.log('Access Token:', token);
  return token; 
}catch (error) {
  console.error('Error in main:', error);
}
});

const makeShipApi = asyncHandler(async (data) => {
  try {
    console.log("API called")
    const token =  getAccessToken();
    console.log(token, 'frhyu')

    // Rest of the code that uses the token
    const response = await axios.post(
      'https://apis-sandbox.fedex.com/ship/v1/shipments',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'x-locale': 'en_US',
        },
      }
    );

    console.log("dikkt nhi h ")
    return response.data;
  } catch (error) {
    console.error('Error in makeShipApi:', error);
    throw new ApiError();
  }
});


export default makeShipApi;

/*
axios.post('https://apis-sandbox.fedex.com/ship/v1/shipments', 
{
    "labelResponseOptions": "URL_ONLY",
    "requestedShipment": {
      "shipper": {
        "contact": {
          "personName": "SHIPPER NAME",
          "phoneNumber": 1234567890,
          "companyName": "Shipper Company Name"
        },
        "address": {
          "streetLines": [
            "SHIPPER STREET LINE 1"
          ],
          "city": "HARRISON",
          "stateOrProvinceCode": "AR",
          "postalCode": 72601,
          "countryCode": "US"
        }
      },
      "recipients": [
        {
          "contact": {
            "personName": "RECIPIENT NAME",
            "phoneNumber": 1234567890,
            "companyName": "Recipient Company Name"
          },
          "address": {
            "streetLines": [
              "RECIPIENT STREET LINE 1",
              "RECIPIENT STREET LINE 2"
            ],
            "city": "Collierville",
            "stateOrProvinceCode": "TN",
            "postalCode": 38017,
            "countryCode": "US"
          }
        }
      ],
      "shipDatestamp": "2020-07-03",
      "serviceType": "STANDARD_OVERNIGHT",
      "packagingType": "FEDEX_PAK",
      "pickupType": "USE_SCHEDULED_PICKUP",
      "blockInsightVisibility": false,
      "shippingChargesPayment": {
        "paymentType": "SENDER"
      },
      "labelSpecification": {
        "imageType": "PDF",
        "labelStockType": "PAPER_85X11_TOP_HALF_LABEL"
      },
      "requestedPackageLineItems": [
        {
          "groupPackageCount": 1,
          "weight": {
            "value": 10,
            "units": "LB"
          }
        },
        {
          "groupPackageCount": 2,
          "weight": {
            "value": 5,
            "units": "LB"
          }
        }
      ]
    },
    "accountNumber": {
      "value": "XXX561073"
    }
  },
    {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMtVFAiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsNzMyMmM1Mjk1NDA5ODRiODg4ODVhZWUzZTg2ODMyM2JiIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE2LURlYy0yMDIzIDA2OjExOjA5IEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE3MDI3Mjg2NjksImp0aSI6IjUyMWY4NmE1LWRjODgtNDA2OC04YWY1LTFkYmE5YTczNzBkYSJ9.Dcm_WTAWAlST4noh6LPCQSp2az_-uKdNK81s8sp0yXy-BvJPrmsyJ71M-7w-A6TyOpZpjbvXnojRsbWeahcLt9Q0Y2h_TrGnpFup5enQTMEoB36OU9XcmZKOK_LorQuZ3YQnzReAjsglTEIljBh3N2HlijyEx77Wvv8C8VVHsy7RMWmtefrh5QlBkKJg1kgXrKFZaYu1L6W6bhI0NMddVrr-16loRi76E4T8MUlIfptN02Wkb3RezLtZK2Ue8Ldq3CqzoIPqa0VrufoCGkTaEO_p7_76Tzm1jSfjSZIAliiyCVYpXsKS_eR0058BawxNMynqHA0_VYbqftBX_3Pwtw5Y6pm-H1XP9B0BshXs_Y8EeU0Fnw-AisQX0t1E2yks5VPw701fTJBdxF1l2w-8r_Anrabkgn5C5Qq41nOqIzY1R6lPTV-b7_s4kzAcZU-Ooyfmao5mHF6fXyYQ2EbdZI17P864KTPGmnOJ7FMyf5Ln5rDacSylt8IOg7O3zx11UhfypJF1etrGbcmsBF6pd3rldhszuCt6sctpdM0C7wRTD13ry9CladB3nq-VOVHgBuevGBZZ5Zyd6eGOEhxp4RydMb-ZCDUlqBmyKlYUbsy15HTHKpFDYkX9gz7pWl33fHvVdY8j3mpwPy2eji0gCfiaHDM-wECVC8L9nwsw9Ps',
          'x-locale': 'en_US',
        },
},
)
.then(response => {
  // Print the entire response
  console.log(`Status Code: ${response.status}`);
  console.log('API Response:', response.data);

  // If you want to access specific data, you can do something like this:
  // console.log('Shipment ID:', response.data.shipmentId);
})
.catch(error => {
  console.error('Error:', error.message);
});
*/