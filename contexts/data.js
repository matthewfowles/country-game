import react from "react";
import { rawData } from "./db";
import { sample, sampleSize } from "lodash";

const DataContext = react.createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={rawData}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = react.useContext(DataContext);

  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

export const useGenerateQuestions = (mode) => {
  const context = react.useContext(DataContext);
  const gameTypes = ["shape", "population", "gdp", "size", "flag"];

  const initialCountries = sampleSize(context, 29);

  const questions = initialCountries.map((country) => {
    const type = sample(gameTypes);

    let difficulty = 1;

    if (mode === "easy") {
      difficulty = sample([1, 2]);
    }
    if (mode === "medium") {
      difficulty = sample([2, 3]);
    }
    if (mode === "hard") {
      difficulty = sample([3, 4]);
    }

    const options = [];

    if (difficulty === 1 || difficulty === 3) {
      sampleSize(
        context.filter((c) => c.code !== country.code),
        7
      ).map((c) => options.push(c));
    }

    if (difficulty === 2 || difficulty === 4) {
      sampleSize(
        context.filter((c) => c.code !== country.code),
        3
      ).map((c) => options.push(c));
    }

    let smaller = null;
    let larger = null;

    if (type === "population") {
      larger = sample(context.filter((c) => c.population > country.population));
      smaller = sample(
        context.filter((c) => c.population < country.population)
      );
    }

    if (type === "size") {
      larger = sample(context.filter((c) => c.area > country.area));
      smaller = sample(context.filter((c) => c.area < country.area));
    }

    if (type === "gdp") {
      larger = sample(context.filter((c) => c.GDP > country.GDP));
      smaller = sample(context.filter((c) => c.GDP < country.GDP));
    }

    return {
      data: country,
      game: {
        type,
        difficulty,
        options,
        larger,
        smaller,
      },
    };
  });

  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  return questions;
};
