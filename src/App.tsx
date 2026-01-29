import "./App.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { PropertyScreen } from "./components/PropertyScreen";
function App() {
  const theme = createTheme({
    fontFamily: "'Crimson Text', serif",
  });

  return (
    <MantineProvider theme={theme}>
      <PropertyScreen></PropertyScreen>
    </MantineProvider>
  );
}

export default App;
