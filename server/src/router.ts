import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/product", itemActions.browse);
router.get("/api/product/:id", itemActions.read);
router.post("/api/product", itemActions.add);

/* ************************************************************************* */

export default router;
