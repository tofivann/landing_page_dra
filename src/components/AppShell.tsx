import { AppShell } from "@mantine/core";

import { Navbar } from "./Navbar";
import { PropertyScreen } from "./PropertyScreen";

export function Demo() {
  return (
    <AppShell padding="md" header={{ height: 80 }}>
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      <AppShell.Main>
        <PropertyScreen />
      </AppShell.Main>
    </AppShell>
  );
}
