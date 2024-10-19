import { Router } from "express";
import * as emp from "./requestHandler.js";
import auth from "./middleware/Auth.js";

const router=Router();
router.route("/countemployees").get(emp.countEmployees)
// router.route("/addemp").post(emp.addEmp)
router.route("/getemployees").get(auth,emp.getEmployees)
router.route("/signup").post(emp.signUp)
router.route("/signin").post(emp.signIn)
export default router;