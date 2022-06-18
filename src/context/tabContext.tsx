import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface TabbingProps {
  children: ReactNode;
}

type Tab = number;

interface ITabbingContext {
  setTab: Dispatch<SetStateAction<number>>;
  tab: number;
}

const defaultValue = {
  tab: 1,
};

export const TabbingContext = createContext<ITabbingContext>(
  defaultValue as ITabbingContext
);

export const TabbingContextProvider = ({ children }: TabbingProps) => {
  const [tab, setTab] = useState<Tab>(1);

  return (
    <TabbingContext.Provider value={{ tab, setTab }}>
      {children}
    </TabbingContext.Provider>
  );
};
