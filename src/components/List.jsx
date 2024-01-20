import { useState } from "react";
import ListItem from "./ListItem"
import recipesData from '../data/recipes.json';
import Button from "./Button";


const List = () => {
  const [allRecipes, setAlllRecipes] = useState(recipesData.slice(3))
  const [recipes, setRecipes] = useState(recipesData.slice(0, 3))
  
  // const renderRecipes = () => {
  //   return recipesData.map((recipe) => (
  //     <div key={recipe.id} className="col">
  //       <ListItem {...recipe} />
  //     </div>
  //   ))
  // }

  const onDelete = (id) => {
    // Actualizar el estado borrando el elemento que tiene ese id
    // Filter me devuelve un nuevo array eliminando los que no cumplan la condición

    // La condicion sera todos los que no tengan este id

    const newArr = recipes.filter((recipe) => {
      return recipe.id !== id
    })

    setRecipes(newArr);

    // setRecipes(recipes.filter((recipe) => recipe.id !== id)); ASPIRAMOS A ESTO
  }

  const onAddRandomRecipe = () => {
    // Saco un indice aleatorio de los disponibles del array de recetas restantes
    if (allRecipes.length === 0) {
      return alert('No hay mas recetas que añadir');
    }

    const randomIndex = Math.floor(Math.random() * allRecipes.length)
    setAlllRecipes(allRecipes.filter((recipe, index) => index !== randomIndex));

    const itemToAdd = allRecipes[randomIndex];
    setRecipes([itemToAdd, ...recipes])
  }

  return (
    <div>
      <h1>Listado</h1>

      <Button type="success" onClick={onAddRandomRecipe} disabled={allRecipes.length === 0}>Add new recipe</Button>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {recipes.map((recipe) => ( // user el index del map es una mala práctica
          <div key={recipe.id} className="col">
            <ListItem {...recipe} onDelete={() => onDelete(recipe.id)} />
          </div>
        ))}
        {/* {renderRecipes()} */}


        {/* <div className="col">
          <ListItem {...recipesData[0]} />
        </div>
        <div className="col">
          <ListItem {...recipesData[1]} />
        </div> */}
      </div>
    </div>
  )
}

export default List