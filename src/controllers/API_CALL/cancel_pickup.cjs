const axios=require("axios")
axios.post("https://apis-sandbox.fedex.com/pickup/v1/pickups/cancel",
{
    "associatedAccountNumber": {
      "value": "XXX561073"
    },
    "pickupConfirmationCode": "1",
    "carrierCode": "FDXG",
    "scheduledDate": "2020-07-03",
    "location": "NQAA"
  },
    {
        headers: {
            'content-type': 'application/json',
    'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMtVFAiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsNzMyMmM1Mjk1NDA5ODRiODg4ODVhZWUzZTg2ODMyM2JiIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE2LURlYy0yMDIzIDA4OjUyOjExIEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE3MDI3MzgzMzEsImp0aSI6IjBhMzc3OWIzLWNmYzUtNDMwZC1hYTEyLWE5N2ZmYjdmYWJmNiJ9.lDlaAiIMaFep4fAoIQz_Wvr-kXjioHS6xVr5zMCGTLWG1pd0qp4gGsTQ8XDWMvabt8bGf7V3PZZU5pTVSvaAu66wDcZKGhGDpWbWT5n4fZU_wxDzfW5m7nz51zAkw6-Km5urzJ6kiVbP1x4_lm4XWjzU6Y0oAVKzfYfS-Cm-PQhJcwb2wTU8aM4Sve0pMRHVNB_zsbs1FpJNd1a-zmovCpMtXzSMnsuuZR-vNe58FoxefURNApIFyEizP1BILCfx7yBXpXLJFY6EILKW5WiGW4K379nisDKGp0HXddBwxAfDgSzQjzjcqzdSauctCSGu6BCFM75J95yUYUk1h_r7J4j-ub71V23ptd7XtchxzHCL-DTnB0fTPeXoFCsgtxYHbmiZCrJRo-LDwjbBSZr-V2nO77SeSEHwknj9rx8A8P3mLMWqhe3zm-rLWPmL-rX_FgMkhvqkvlaoCh6ynVJfx_VwmBoC8_xBdq1YRlje3BbBHbEFfm2vUFGLGdHswOzOBvegx61JrX_G3nPcBXfqKNq5UCwZspA9aOKt0cqdK0kjxV4fUvRHfyvuMnRxQT4crftAJqBrpRg71l5iLqoIPeEa0_A6uY9-CrKwqtusPjbsIP3Sgy3sySUKTUXHx9QTFe7qGR4uoj8Isgd5gBwKEjaSVtdLgr-CO3AsvMxcWs8',            'x-locale': 'en_US',
          },
      },
)
.then(response => {
    // Print the entire response
    console.log(`Status Code: ${response.status}`);
    console.log('API Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });