import { Link } from "react-router-dom";
import { Animal } from "../models/Animal";
import { Div } from "../styled components/Div";
import { Img } from "../styled components/Img";
import { Main } from "../styled components/Main";
import { ShowAnimal } from "./ShowAnimal";

export function Animals() {
  let animals: Animal[] = [];

  let animalsString: string = localStorage.getItem("animals") || "[]";
  animals = JSON.parse(animalsString);

  let divs = animals.map((animal, i) => {
    let animalLink = `/${animal.name}`;

    return (
      <Div key={i}>
        <Img src={animal.image} alt="bild på djur"></Img>
        <Link to={animalLink}>{animal.name}</Link>
        <p>{animal.about}</p>
      </Div>
    );
  });

  // animals.map((animal, i) => {
  //   let a: Animal = {
  //     id: animal.id,
  //     name: animal.name,
  //     born: animal.born,
  //     about: animal.about,
  //     facts: animal.facts,
  //     image: animal.image,
  //     isFed: animal.isFed,
  //     lastFed: animal.lastFed,
  //   };

  //   return <ShowAnimal animal={a}></ShowAnimal>;
  // });

  console.log(animals);

  return <Main>{divs}</Main>;
}
