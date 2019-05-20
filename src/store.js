import { createStore } from 'redux'


const initialState = {
        name: '',
        category: '',
        firstName: '',
        lastName: '',
        ingredients: [],
        instructions: [],
        recipe: []
}
export const UPDATE_NAME = 'UPATE_NAME'
export const UPDATE_CATEGORY ='UPDATE_CATEGORY'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'


function reducer(state = initialState, action){
    const { type, payload} = action
    switch (type){
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case UPDATE_FIRST_NAME:
            return {...state, firstName: payload}
        case UPDATE_LAST_NAME:
            return {...state, lastName: payload}    
        case ADD_INGREDIENT:
                const newIngredients = [...state.ingredients, payload];
                return { ...state, ingredients: newIngredients }  
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
            case ADD_RECIPE:
                    const {
                      name,
                      category,
                      firstName,
                      lastName,
                      ingredients,
                      instructions
                    } = state
                    const recipe = {
                      name,
                      category,
                      firstName,
                      lastName,
                      ingredients,
                      instructions
                    }
                    const newRecipe = [...state.recipe, recipe]
                    return ({ ...state, recipe: newRecipe,
                        name: '',
                        category: '',
                        firstName: '',
                        lastName: '',
                        ingredients: [],
                        instructions: [], }
                            
                        ) 
     
        default:
            return state
    }
}

export default createStore(reducer)