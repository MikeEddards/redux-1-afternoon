import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store from '../../store'

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipe: reduxState.recipe
    };
  }
  componentDidMount(){
    store.subscribe(() => {
      let newState = store.getState()
      this.setState({
        recipe: newState.recipe
      })
    })
  }

  render() {
    console.log(this.state)
    const recipes = this.state.recipe.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
