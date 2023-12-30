import axios from 'axios'
import { ApiError } from '../../utils/Apierror.js';
import { asyncHandler } from '../../utils/asyncHandler.js';



const token='';
const makeApiPostCall =asyncHandler(async ( data) => {
try{
      const rateCal=await axios.post("https://developer.fedex.com/api/en-in/catalog/rate/v1/rate/v1/rates/quotes",data,
  {
    headers: {
        'content-type': 'application/json',
        'Authorization':'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJDWFMtVFAiXSwiUGF5bG9hZCI6eyJjbGllbnRJZGVudGl0eSI6eyJjbGllbnRLZXkiOiJsNzMyMmM1Mjk1NDA5ODRiODg4ODVhZWUzZTg2ODMyM2JiIn0sImF1dGhlbnRpY2F0aW9uUmVhbG0iOiJDTUFDIiwiYWRkaXRpb25hbElkZW50aXR5Ijp7InRpbWVTdGFtcCI6IjE2LURlYy0yMDIzIDExOjEzOjUyIEVTVCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJhcGltb2RlIjoiU2FuZGJveCIsImN4c0lzcyI6Imh0dHBzOi8vY3hzYXV0aHNlcnZlci1zdGFnaW5nLmFwcC5wYWFzLmZlZGV4LmNvbS90b2tlbi9vYXV0aDIifSwicGVyc29uYVR5cGUiOiJEaXJlY3RJbnRlZ3JhdG9yX0IyQiJ9LCJleHAiOjE3MDI3NDY4MzIsImp0aSI6ImExMWU1MDkyLTFmZGUtNDM0Zi04MmFmLTkyOTM2YjEyNTIwOSJ9.FfGtollql2g_QUwgVPaelEEBavkfrqIZUBcp0jEEP9GbQ7pQEEj4DhZ0wmABxnVj3mxpDtkxowkJVdnsNlJWIXEcyRG4szeYC3Aj6O5hF1MsUTDD8tJ9uhqj47DzyAClZRQrj2QgMwAhdBBpOgiF4UJuzYXrqljqMbKfhNtgxOKcS2V4Ys965uNRY9747Z0b8e5BHLSSPLN_5TBnQ4lGWdatAwz0vtaJlwSSg_XsBgMnl34JYOdaoavX8coIer4ynRyKLAuiZLRVw-5UZSUwZGC8wtiWR2b-O8LAHWlTkw89rfDI27UogB_ztxK6ghyKuxyepSePE4bDrBuvPkmzQ2G0j19cPYaJ8VwFEtxHG7XT_cOKqmrHrBgS0LTlPeb7SfYRNnlu3FuQSM8JPM4oWngqdlBsxPzrkwIZpkoJOLDk90i5_beAEDRpP_mzprq4kgoh-PTuCQF7IIqSvfYdz97mw08bM7Z3EXetsam8mVpwLaV6QETW19gPdsB49E3MctmlCyiXIFRsPwdQqivqyW6EZYA9aigKzZ4ERpL2NC7s3gcMwBw-UaH7n8TEAPC9PBplj5Aal4pgbUDlpydkl93hnteDoIH4W5p7fClMeX4k4WSK74tmtBgJ0-GLrj09E--D1VlhcF1lFo_SO_KRgqRj-Ddmu2MeGEXONpOXlAU', 
        'x-locale': 'en_US',
      },
  },)
}
catch(error){
  throw new ApiError
}
})

export {makeApiPostCall}