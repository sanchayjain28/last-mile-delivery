import { asyncHandler } from "../utils/asyncHandler.js";
import {dirname} from "path";
import ExcelJS from 'exceljs';
import path from 'path';
import { fileURLToPath } from 'url';
import {ApiError} from '../utils/Apierror.js'
import {ApiResponse} from '../utils/Apiresponse.js'
// import ApiFreightCall from './API_CALL/rate.mjs'

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const lookupFreightCost = async (postalCodeSource, postalCodeDest) => {
   const filePath = path.join(currentDir, 'boook.xlsx');

   const workbook = new ExcelJS.Workbook();
   await workbook.xlsx.readFile(filePath);

  const sheet = workbook.getWorksheet(1);
  let freightCost=null;
  sheet.eachRow({ includeEmpty: false }, (row) => {
    if (row.getCell(1).value == postalCodeSource && row.getCell(2).value == postalCodeDest) {
      freightCost = row.getCell(3).value;
      return false;
    }
  });
  
  return freightCost;
};




const freightCalculator = asyncHandler(async(req, res) => {
    try {
        const { postalCodeSource,postalCodeDest,weight } = req.body;
        //const apiResponse = await ApiFreightCall(req.body);
        const freightCost = await lookupFreightCost(postalCodeSource, postalCodeDest);
        if (freightCost !== null) {
          const total=freightCost*weight;
          res.status(200).json({ success: true, total, message: 'Freight cost retrieved successfully' });
        } else {
          res.status(404).json({ success: false, message: 'Freight cost not found for the given postal codes' });
        }
    } 
    catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to place the order' });
  }
});
export {freightCalculator};