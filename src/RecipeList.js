import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css'

class RecipeList extends Component {
    static defaultProps = {
    recipes: [
      {
        title: "Avocado with eggs",
        instructions: "Cut bread. Bake eggs. Combine all ingredients. Put some salt and olive oil.",
        ingredients: ["bread", "avocado", "eggs","salt","olive oil"],
        img: "avocadoegs.jpeg"
      },
      {
        title: "Real american burger",
        instructions: "Bake meat just at the right temperature. Add ingredients together",
        ingredients: ["200g meat", "bread","ketchup","salad","tomato"],
        img: "burger.jpeg"
      },
      {
        title: "Wraps",
        instructions: "Bake ingredients and wrap them in tortilla.",
        ingredients: ["4 tortilla","1 chicken breast", "all sorts of different vegetable", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "wraps.jpeg"
      }
    ]
  }
  
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
    render(){
     const recipes = this.props.recipes.map((r,index) => (
      <Recipe key={index} {...r} />
    ));
    
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )   
    }
}

export default RecipeList;