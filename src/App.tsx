import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { PropertyScreen } from "./components/PropertyScreen";
import {Demo} from "./components/AppShell"
function App() {
  const theme = createTheme({
    fontFamily: "'Google Sans', serif",
  });

  return (
    <MantineProvider theme={theme}>
     <Demo></Demo>
    </MantineProvider>
  );
}

export default App;
