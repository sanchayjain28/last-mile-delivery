const axios=require('axios')
axios.post('https://developer.fedex.com/api/en-in/catalog/postal-code/v1/country/v1/postal/validate',
{
    "carrierCode": "FDXE",
    "countryCode": "US",
    "stateOrProvinceCode": "TN",
    "postalCode": "38017",
    "shipDate": "2016-09-13"
  },
{
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMtVFAiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsNzMyMmM1Mjk1NDA5ODRiODg4ODVhZWUzZTg2ODMyM2JiIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE2LURlYy0yMDIzIDA4OjMwOjQ0IEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE3MDI3MzcwNDQsImp0aSI6IjVhMmJhMzQ5LWIyODYtNDEzMC05YTViLTA3YjRhZWIwNGY4ZiJ9.N6t2qBI4DhQ2ww_UldKWOkGBZ86DKhetZYwUOMawas7YD7Jk-4vTTbXm2s_aFtGgXLzzQxZFeM4_Dr_4FCs-DviXGsrcvud1LSyct93PwmakvIGfnbxclN4Tm04ypGhQdTcyEA005iyvVfjNSaNRn-bDDg1lZoqO_PG2qjXuAIJBJfQemnSV1p5GUfcdQd6dQZfBU6Umei5N4QGrdVsVxoLlBJTwpzTCvor633l8BlX5OD3tDJoCB8I85Gy8p0s3Z-bd2t6Sxmi2PRUTEYSlEMTjOCoJ4hSE7CnwytARgkwsaUCnnSMgBU2F6P6UH85TVREoBqNUD7PSZ-WyEjGVX6ARjTD_ucBSqb0UucdS3SuVx3dYszVH3H_jJCRDfKy-hQY4VRfwBgGrDVQP7MXtYBF2m7cX9LNEN7zL04j_pe43rQCgGSlL2qZWj4sNHHzv9YH-o-NmhKqEE96dgJG0XyBfsW62u5mGhX9CPEhFz0IXvSbqFyeNNFK4jeLVBkX5gh6qjCZJakj4Nsr7-JUrBMl0aCFz-xuCqYhzycxDcZBIn5hhwZ2Ad_HS_3APWsxevkz8qeJTGqHIlZv_Ah9fWseS1Md68XvchjrIb9sMp7mvyEnHiHxdMKFH5Vysz-nsQ-kVfq5WCKZDAdUzha2-BO6PDuxCKEh4R0LSV-LO8Y4',
    'x-locale': 'en_US',},
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

// 