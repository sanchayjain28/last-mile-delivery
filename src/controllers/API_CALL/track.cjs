const axios = require('axios');
axios.post('https://apis-sandbox.fedex.com/track/v1/trackingdocuments',{
    "masterTrackingNumberInfo": {
      "trackingNumberInfo": {
        "trackingNumber": "123456789012"
      }
    },
    "associatedType": "STANDARD_MPS"
  },{
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

// 