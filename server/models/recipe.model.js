import {model, Schema} from 'mongoose';

const RecipeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Recipe name is required"],
        },
        cookTime: {
            type: Number,
            required: [true, "Cook time is required!"],
        },
        directions: {
            type: String,
            required: [true, "Directions are required!"],
        }
    },
    { timestamps: true }
);
const Recipe = model("Recipe", RecipeSchema);
export default Recipe;
