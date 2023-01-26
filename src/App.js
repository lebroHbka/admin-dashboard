import { ThemeModeContext, useThemeMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [theme, changeThemeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={changeThemeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content"></main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
