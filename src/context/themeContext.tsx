import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ThemeProps {
  children: ReactNode;
}

interface IThemeContext {
  setTheme: Dispatch<SetStateAction<string | null>>;
  theme: string | null;
  colorTheme: string;
}

const defaultValue = {
  theme: null,
};

export const ThemeContext = createContext<IThemeContext>(
  defaultValue as IThemeContext
);

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<string | null>(
    typeof window !== "undefined" && localStorage.theme
      ? localStorage.theme
      : "light"
  );
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme as any);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme as any);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
