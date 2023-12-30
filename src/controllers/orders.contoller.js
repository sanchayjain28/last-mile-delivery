import { asyncHandler } from "../utils/asyncHandler.js";
import {Orders} from '../models/orders.models.js'
import {orderDetails} from '../models/order_detail.models.js'
import {LabelRequestModel} from '../models/order_sch.models.js'
import {ApiError} from '../utils/Apierror.js'
import {ApiResponse} from '../utils/Apiresponse.js'
import makeShipApi from './API_CALL/ship.mjs'

/*
const apiResponse = await makeShipApi(req.body);
    const userId = req.user._id;
*/
const placeOrder = asyncHandler(async (req, res) => {
  try {
    const {
      labelResponseOptions,
      requestedShipment: {
        shipper: {
          contact: {
            personName: shipperPersonName,
            phoneNumber: shipperPhoneNumber,
            companyName: shipperCompanyName,
          },
          address: {
            streetLines: shipperStreetLines,
            city: shipperCity,
            stateOrProvinceCode: shipperStateCode,
            postalCode: shipperPostalCode,
            countryCode: shipperCountryCode,
          },
        },
        recipients: [
          {
            contact: {
              personName: recipientPersonName,
              phoneNumber: recipientPhoneNumber,
              companyName: recipientCompanyName,
            },
            address: {
              streetLines: recipientStreetLines,
              city: recipientCity,
              stateOrProvinceCode: recipientStateCode,
              postalCode: recipientPostalCode,
              countryCode: recipientCountryCode,
            },
          },
        ],
        shipDatestamp,
        serviceType,
        packagingType,
        pickupType,
        blockInsightVisibility,
        shippingChargesPayment: {
          paymentType,
        },
        shipmentSpecialServices: {
          specialServiceTypes,
        },
        labelSpecification: {
          imageType,
          labelStockType,
        },
        requestedPackageLineItems,
      },
      accountNumber: {
        value: accountNumberValue,
      },
    } = req.body;
    const apiResponse = await makeShipApi(req.body);

    // Create a new order using LabelRequestModel schema and destructured values
    const order = new LabelRequestModel({
      labelResponseOptions,
      requestedShipment: {
        shipper: {
          contact: {
            personName: shipperPersonName,
            phoneNumber: shipperPhoneNumber,
            companyName: shipperCompanyName,
          },
          address: {
            streetLines: shipperStreetLines,
            city: shipperCity,
            stateOrProvinceCode: shipperStateCode,
            postalCode: shipperPostalCode,
            countryCode: shipperCountryCode,
          },
        },
        recipients: [
          {
            contact: {
              personName: recipientPersonName,
              phoneNumber: recipientPhoneNumber,
              companyName: recipientCompanyName,
            },
            address: {
              streetLines: recipientStreetLines,
              city: recipientCity,
              stateOrProvinceCode: recipientStateCode,
              postalCode: recipientPostalCode,
              countryCode: recipientCountryCode,
            },
          },
        ],
        shipDatestamp,
        serviceType,
        packagingType,
        pickupType,
        blockInsightVisibility,
        shippingChargesPayment: {
          paymentType,
        },
        shipmentSpecialServices: {
          specialServiceTypes,
        },
        labelSpecification: {
          imageType,
          labelStockType,
        },
        requestedPackageLineItems,
      },
      accountNumber: {
        value: accountNumberValue,
      },
    });

    // Save the order
    const savedOrder = await order.save();

    res
      .status(200)
      .json({ success: true, savedOrder, message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to place the order' });
  }
});


// Example: Get orders for a specific user
const getOrdersByUser =asyncHandler( async (req, res) => {
  try {
    const organizationId=req.user._id;
    const orders = await Orders.find({ organization: organizationId });

    const orderCount = await Orders.countDocuments({ organization: organizationId });

    res.status(200).json({ success: true,orders,orderCount});
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch orders' });
  }
});


export { placeOrder, getOrdersByUser };



/*
"paymentMethod":"COD",
   "recAddress": {
      "recAddress": "near Jaiput",
      "pincode": "304504",
      "city":"Jaiput",
      "state": "Rajsathan",
      "country": "India",
      "recName": "kuch",
      "recMob":"85004578"
    },
    "sender": {
      "senName":"unkpta",
      "contact": "844640",
      "email": "sanchayjai.it@gmal.com",
      "address": "near bhiwarr"
    }
*/