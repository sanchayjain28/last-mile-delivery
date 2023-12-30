const axios=require("axios")
axios.post('https://apis-sandbox.fedex.com/pickup/v1/pickups',
    {
        "associatedAccountNumber": {
          "value": "XXX561073"
        },
        "originDetail": {
          "pickupLocation": {
            "contact": {
              "personName": "Contact Name for Pickup",
              "phoneNumber": "1234567890"
            },
            "address": {
              "streetLines": [
                "10 Fedex Pkwy"
              ],
              "city": "Collierville",
              "stateOrProvinceCode": "TN",
              "postalCode": "38017",
              "countryCode": "US"
            }
          },
          "readyDateTimestamp": "2020-07-03T11:00:00Z",
          "customerCloseTime": "17:00:00"
        },
        "carrierCode": "FDXE"
      },
      {
        headers: {
            'content-type': 'application/json',
'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMtVFAiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsNzMyMmM1Mjk1NDA5ODRiODg4ODVhZWUzZTg2ODMyM2JiIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE3LURlYy0yMDIzIDIzOjM4OjQxIEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE3MDI4Nzc5MjEsImp0aSI6ImZjNmRjZDNmLTJkYzgtNDVlYy1hNjZmLTI1MTYxMDI3NjlhYyJ9.B9-2rWJ87Wsz_pGC5MDAqqtfkP8DMGwD_7KUMMG484uqoPxgEL6cnBge_AIftX2zFXlm1Bd7CNybK06FGSFPIVAQOIU_XSA3l8JpKaq7ad28dOf3Un13kx6LK-Ro8kVFMHZT9P-nsTZJPZVGM_VQNLGI1ZpDBWtTxTV_7d87lCA_T6sKmM0JLjW-GJhQH2Go1BtxSyyJO9GJ8jK6JaTSV-urlLHvHLTRiV63qcE1wP79v89gNHVFr6Lxbzhzq3LWCyuTNBUf7FSnfCnrknKJa1XlkiBRzgLj7hAR1WSUQJMzO7QMLrzn7Qt4JTadHyS4REKHHFXw4RXyWcKb-k1ffQeVoIeqHjU8nJW2ObEe6g-Iw0Fd6JOiDjXcFJ8_oPLG9g4No-YhiiuywKkNXMkvG0aPgCDXF2LGXcrpEzaMqsIKA_lt-2fo-ic_vBPzufDwNOoqVaWHynoyjxMDBauSQ50ZJhx46YEEaL0gdfUqOYtjWJqIg53l2DHXDlr30LRXRAkTuT17AUrj1kkmjvz7xEYP8nPOX6coxzpWaw12f9szG9JAGip3k2cW0GVHQyIEYgV-hZOML-bgZqbh61LlcrzxPFj2w5I35YN2RAMcknhD9WO6ua2WQqTIhDrvjq44FDjQbnY_of3pBCl1QJAL29e1u7TlxRxzWfXEO3hKXfY',
           'x-locale': 'en_US',
          },
      },
)

/*   Data req
        
*/
.then(response => {
    // Print the entire response
    console.log(`Status Code: ${response.status}`);
    console.log('API Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });