import { asyncHandler } from "../utils/asyncHandler.js";
import {Organization} from '../models/organisation.models.js'
import {ApiError} from '../utils/Apierror.js'
import {ApiResponse} from '../utils/Apiresponse.js'
import jwt from "jsonwebtoken"


const generateAccessAndRefereshTokens=async(OrganizationId)=>{
    try {
        const user=await Organization.findById(OrganizationId)
        const accessToken=user.generateAccessToken()
        const refreshToken=user.generateRefreshToken()

        user.refresh_token=refreshToken
        await user.save({validateBeforeSave:false})

        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"something went wrong")
    }
}


const registerOrganisation=asyncHandler(async (req,res)=>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res
    // console.log("Request Body:", req.body); 
    const {name, email ,phone ,address1,address2,password,city ,postalCode ,state ,type } = req.body
    //console.log("email: ", email);
    // console.log("Request Body:", req.body);

    if (
        [name, email, phone,address1,city ,postalCode ,state ,type,password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedOrganisation = await Organization.findOne({email})

    if (existedOrganisation) {
        throw new ApiError(409, "User with email already exists")
    }
    //console.log(req.files);
   
    const organization = await Organization.create({
        name:name,
        phone:phone,
        address1:address1,
        address2:address2,
        password:password,
        city :city,
        email:email,
        postalCode:postalCode ,
        state :state,
        type:type,
    })

    const createdOrganisation = await Organization.findById(organization._id).select(
        "-password -refreshToken"
    )

    if (!createdOrganisation) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200,createdOrganisation , "User registered Successfully")
    )

} )


const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, password} = req.body
    console.log(email);

    if (!email) {
        throw new ApiError(400, "username or email is required")
    }
    
    // Here is an alternative of above code based on logic discussed in video:
    // if (!(username || email)) {
    //     throw new ApiError(400, "username or email is required")
        
    // }

    const user = await Organization.findOne({email})

    if (!user) {
        console.log("usernot ")
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await Organization.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken,refreshToken
            },
            "User logged In Successfully"
        )
    )

})


const logoutUser = asyncHandler(async(req, res) => {
    await Organization.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})




const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await Organization.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refresh_token) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})




export {registerOrganisation,
    loginUser,
    logoutUser,
    refreshAccessToken
}