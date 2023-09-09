import react from "react";

const RadioContext = react.createContext();

export const RadioProvider = ({ children, initialValue, onChange }) => {
  const [value, setValue] = react.useState(initialValue);

  const contextValue = {
    value: value || initialValue,
    setValue: (value) => {
      onChange && onChange(value);
      setValue(value);
    },
  };

  return (
    <RadioContext.Provider value={contextValue}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = () => {
  const context = react.useContext(RadioContext);

  if (context === undefined) {
    throw new Error("useRadio must be used within a RadioProvider");
  }

  return context;
};
