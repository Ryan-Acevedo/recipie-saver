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
        },
        // user object for the recipe maker
        user: {
            //for displaying maker name in details
            firstName: {
                type: String
            },
            //for comparing logged user._id and recipe maker id
            id: {
                type: String
            }
        }
    },
    { timestamps: true }
);
const Recipe = model("Recipe", RecipeSchema);
export default Recipe;
