import React, { createContext, useState } from "react";
import { SingleProduct } from "./Api/GetApi";

interface ContextProps {
  selectedData: SingleProduct | null;
  setSelectedData: React.Dispatch<React.SetStateAction<SingleProduct | null>>;
}

export const SelectedDataContext = createContext<ContextProps>({
  selectedData: null,
  setSelectedData: () => {},
});

interface SelectedDataProviderProps {
  children: React.ReactNode; // Add the children prop
}

export const SelectedDataProvider: React.FC<SelectedDataProviderProps> = ({
  children,
}) => {
  const [selectedData, setSelectedData] = useState<SingleProduct | null>(null);

  return (
    <SelectedDataContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </SelectedDataContext.Provider>
  );
};
