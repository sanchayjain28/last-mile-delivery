import {Router} from "express";
import {registerOrganisation,loginUser,logoutUser,refreshAccessToken} from '../controllers/organisation.controller.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {placeOrder,getOrdersByUser } from '../controllers/orders.contoller.js';
import { freightCalculator } from "../controllers/freightcalcu.controller.js";
const router=Router()

router.route("/register").post(registerOrganisation)
router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/place_order").post(verifyJWT,placeOrder)
router.route("/my_orders").post(verifyJWT,getOrdersByUser)
router.route("/freight").post(freightCalculator)
export default router