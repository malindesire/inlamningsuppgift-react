import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../models/Animal";
import { Img } from "../styled components/Img";
import { Main } from "../styled components/Main";

export function ShowAnimal() {
  const [animalName, setAnimalName] = useState("");
  const [feedAnimal, setFeedAnimal] = useState(false);

  let params = useParams();
  let animals: Animal[] = [];

  let animalsString: string = localStorage.getItem("animals") || "[]";
  animals = JSON.parse(animalsString);

  useEffect(() => {
    if (params.name) {
      setAnimalName(params.name);
    }
  }, [params.name]);

  function handleClick() {
    setFeedAnimal(!feedAnimal);
    console.log(feedAnimal);
  }

  let displayAnimal = animals.map((animal, i) => {
    if (animal.name === animalName) {
      return (
        <div>
          <Img src={animal.image} alt="bild på djur"></Img>
          <h2>{animal.name}</h2>
          <p>Föddes: {animal.born}</p>
          <p>
            Om {animal.name}: {animal.about}
          </p>
          <p>Fakta: {animal.facts}</p>
          <p>
            {animal.name} matades senast: {animal.lastFed}
          </p>
          <button onClick={handleClick}>Mata {animal.name}</button>
          {feedAnimal && <p>{animal.name} är nu matad!</p>}
        </div>
      );
    }
  });

  return <Main>{displayAnimal}</Main>;
}

// import { Animal } from "../models/Animal";

// interface IShowAnimalProps {
//   animal: Animal;
// }

// export function ShowAnimal(props: IShowAnimalProps) {
//   let animals: Animal[] = [];

//   return <div>{props.animal.name}</div>;
// }
