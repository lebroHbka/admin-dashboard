import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeModeContext, useThemeMode } from "./theme";
import { Topbar } from "./screens/global/Topbar";
import { Sidebar } from "./screens/global/Sidebar";
import { Dashboard } from "./screens/dashboard";
// import { Team } from "./screens/team";
// import { Invoices } from "./screens/invoices";
// import { Contacts } from "./screens/contacts";
// import { Bar } from "./screens/bar";
// import { Form } from "./screens/form";
// import { Line } from "./screens/line";
// import { Pie } from "./screens/pie";
// import { FAQ } from "./screens/faq";
// import { Geography } from "./screens/geography";
// import { Calendar } from "./screens/calendar";

function App() {
  const [theme, changeThemeMode] = useThemeMode();

  return (
    <ThemeModeContext.Provider value={changeThemeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              {/* <Route path="/team" element={<Team/>}/> */}
              {/* <Route path="/invoices" element={<Invoices/>}/> */}
              {/* <Route path="/contacts" element={<Contacts/>}/> */}
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/form" element={<Form/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
              {/* <Route path="/calendar" element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;

