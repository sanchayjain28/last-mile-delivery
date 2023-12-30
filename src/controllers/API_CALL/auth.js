import moment from "moment"; 
import { ApiError } from '../../utils/Apierror.js';
import { asyncHandler } from '../../utils/asyncHandler.js';
import {AccessToken} from '../../models/auth_token.models.js';


const makeAuthApi = asyncHandler(async () => {
  try {
    const latestAccessToken = await AccessToken.findOne({}, {}, { sort: { 'time': -1 } });
    const expiryTime = moment(latestAccessToken.time).add(55, 'minutes');
    const currentDateTime = new Date();
    console.log(latestAccessToken.AccessToken)
    if (!latestAccessToken || expiryTime < currentDateTime) {
      try {
        console.log("latest nhi h");
        const response = await fetch('https://apis-sandbox.fedex.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'grant_type=client_credentials&client_id=l7322c529540984b88885aee3e868323bb&client_secret=68021582214c441698f5f395e4221f9a',
        });
        console.log("hojaa ")
        // Check if the response status is in the range 200-299
        if (response.status!=200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);
        console.log(`response ka data ${responseData.access_token}`);

        const TokenSave = await AccessToken.create({
          time: currentDateTime,
          AccessToken: responseData.access_token
        });

        return responseData.access_token;
      } catch (error) {
        console.error('Error in fetching token:', error.message);
        throw new ApiError();
      }
    } else {
      console.log("yelo")
      return latestAccessToken.AccessToken;
    }
  } catch (error) {
    console.error('Error in makeAuthApi:', error.message);
    throw new ApiError();
  }
});

export default makeAuthApi;



