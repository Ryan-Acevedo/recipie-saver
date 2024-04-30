import Recipe from "../models/recipe.model.js";

// CREATE
async function createRecipe(req, res) {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// READ
async function getRecipes(req, res) {
    try {
        const allRecipes = await Recipe.find();
        res.json(allRecipes);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getRecipe(req, res) {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json(recipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// UPDATE
async function updateRecipe(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

// DELETE
async function deleteRecipe(req, res) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        res.json(deletedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export {
    createRecipe,
    getRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
};
