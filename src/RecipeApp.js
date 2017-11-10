import React, { Component } from 'react';

import Navbar from './navbar'
import RecipeList from './RecipeList'
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "Avocado with eggs",
          instructions: "Cut bread. Bake eggs. Combine all ingredients. Put some salt and olive oil.",
          ingredients: ["bread", "avocado", "eggs","salt","olive oil"],
          img: "avocadoegs.jpeg"
        },
        {
          id: 2,
          title: "Real american burger",
          instructions: "Bake meat just at the right temperature. Add ingredients together",
          ingredients: ["200g meat", "bread","ketchup","salad","tomato"],
          img: "burger.jpeg"
       },
        {
          id: 3,
          title: "Wraps",
          instructions: "Bake ingredients and wrap them in tortilla.",
          ingredients: ["4 tortilla","1 chicken breast", "all sorts of different vegetable", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "wraps.jpeg"
        }
        ],
        nextRecipeId: 3,
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes = {this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
