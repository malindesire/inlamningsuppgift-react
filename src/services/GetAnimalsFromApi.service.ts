import axios from "axios";
import { useEffect, useState } from "react";
import { Animal } from "../models/Animal";
import { IAnimal } from "../models/IAnimal";

export function GetAnimalsFromApi () {
    const [saveAnimals, setSaveAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals").then((response) => {
            let animalsFromApi = response.data.map((animal: IAnimal) => {
                return new Animal(animal.id, animal.name, animal.yearOfBirth, animal.shortDescription, animal.longDescription, animal.imageUrl, animal.isFed, animal.lastFed);
            });

        setSaveAnimals(animalsFromApi);
        });
        localStorage.setItem("animals", JSON.stringify(saveAnimals));
    }, [saveAnimals]);
};