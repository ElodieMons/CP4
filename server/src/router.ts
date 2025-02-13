import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* ************************************************************************* */
//  Product
/* ************************************************************************* */
import productActions from "./modules/product/productActions";

router.get("/api/product", productActions.browse);
router.get("/api/product/:id", productActions.read);

router.post("/api/product", productActions.add);

/* ************************************************************************* */

export default router;
