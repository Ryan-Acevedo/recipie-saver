import { Router } from "express";
import { createRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } from "../controllers/recipe.controller.js";

const router = Router();

router.route("/recipes")
    .get(getRecipes)
    .post(createRecipe);

router.route("/recipes/:id")
    .get(getRecipe)
    .put(updateRecipe)
    .delete(deleteRecipe);

export default router;