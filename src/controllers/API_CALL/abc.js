import moment from "moment"; 
import { ApiError } from '../../utils/Apierror.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import {AccessToken} from '../../models/auth_token.models.js';

const makeAuthApi = asyncHandler(async () => {
  try {
    // Fetch the latest AccessToken document
    // const tokenDocument = await AccessToken.findOne();
    // if(tokenDocument && tokenDocument.time){}
    const latestAccessToken = await AccessToken.findOne({}, {}, { sort: { 'time': -1 } });
    const expiryTime = moment(latestAccessToken.time).add(55, 'minutes');
    const currentDateTime = new Date();
    if(!latestAccessToken || expiryTime<currentDateTime){
      try {
        console.log("latest nhi h")
        fetch('https://apis-sandbox.fedex.com/oauth/token', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=l7322c529540984b88885aee3e868323bb&client_secret=68021582214c441698f5f395e4221f9a',
        })
        // const response = await axios.post(
        //   'https://apis-sandbox.fedex.com/oauth/token',
        //   qs.stringify({
        //     grant_type: 'client_credentials',
        //     client_id: 'l7322c529540984b88885aee3e868323bb',
        //     client_secret: '68021582214c441698f5f395e4221f9a',
        //   }),
        //   {
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //   }
        // );
    
        if (response.status!=200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const TokenSave=await AccessToken.create({
          time:currentDateTime,
          AccessToken:responseData.access_token
        })
        
        const responseData = response.data;
        // console.log(responseData);
        // console.log(responseData.access_token);
        return responseData.access_token
      } catch (error) {
        console.error('Error in makeAuthApi:', error.message);
        throw new ApiError();
      }
    }
    else return latestAccessToken.AccessToken;
  }catch (error) {
    console.error('Error in makeAuthApi:', error.message);
    throw new ApiError();
  }
});


 export default makeAuthApi;


 // fetch('https://apis-sandbox.fedex.com/oauth/token', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: 'grant_type=client_credentials&client_id=l7322c529540984b88885aee3e868323bb&client_secret=68021582214c441698f5f395e4221f9a',
// })
  // .then(response => {
  //   // Check if the response status is in the range 200-299
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   console.log(response.json())
  //   console.log(data.access_token)
  //   return response.json(); // Parse the response as JSON
  // })
  // .then(data => {
  //   // console.log(data);
  //   // console.log(data.access_token)
  // })
  // .catch(error => {
  //   console.error('Error:', error.message);
  // });



// //   const makeApiPostCall = asyncHandler(async (data) => {
// //   try {
// //     const token =  getTokenHandler(); 
// //     const response = await axios.post(
// //       'https://apis-sandbox.fedex.com/ship/v1/shipments',
// //       data,
// //       {
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ${token}`,
// //           'x-locale': 'en_US',
// //         },
// //       }
// //     );
// //     return response.data;
// //   } catch (error) {
// //     // You might want to log the actual error details
// //     console.error('Error in makeApiPostCall:', error);
// //     throw new ApiError();
// //   }
// // });
// const makeAuthApi = asyncHandler(async () => {
//   try {
   
//     const latestAccessToken = await AccessToken.findOne({}, {}, { sort: { 'time': -1 } });
//     const expiryTime = moment(latestAccessToken.time).add(55, 'minutes');
//     const currentDateTime = new Date();
//     if(!latestAccessToken || expiryTime<currentDateTime){
//       try {
//         console.log("latest nhi h")
//         fetch('https://apis-sandbox.fedex.com/oauth/token', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: 'grant_type=client_credentials&client_id=l7322c529540984b88885aee3e868323bb&client_secret=68021582214c441698f5f395e4221f9a',
//         })
//         .then(response => {
//           // Check if the response status is in the range 200-299
//           if (response.status!=200) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           const responseData = response.data;
//           const TokenSave= AccessToken.create({
//             time:currentDateTime,
//             AccessToken:responseData.access_token
//           })
//           console.log(data.access_token)
          
//         // console.log(responseData);
//         console.log(responseData.access_token);
//         return responseData.access_token
//           // return response.json(); // Parse the response as JSON
//         })
//         // .then(data => {
//         //   console.log(data);
//         //   console.log(data.access_token)
//         // })
//         .catch(error => {
//           console.error('Error:', error.message);
//         });
//         // // const responseData = response.data;
//         // // console.log(responseData);
//         // // console.log(responseData.access_token);
//         // return responseData.access_token
//       }
//       catch(error){
//         throw new ApiError();
//       }
//     }
//     else return latestAccessToken.AccessToken;
//   }catch (error) {
//     console.error('Error in makeAuthApi:', error.message);
//     throw new ApiError();
//   }
// });


//  export default makeAuthApi;

 