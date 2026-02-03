import { AppShell, Stack, Anchor } from "@mantine/core";

import { Navbar } from "./Navbar";
import { PropertyScreen } from "./PropertyScreen";
import { useDisclosure } from '@mantine/hooks';


export function Demo() {

    const [opened, { toggle}] = useDisclosure();
  return (
    <AppShell padding="md" header={{ height: 80 }}
    
    navbar={{
        width: "100%", 
        breakpoint: 'sm', 
        collapsed: { desktop: true, mobile: !opened },
      }}
   
    >
      <AppShell.Header>
        <Navbar opened={opened} toggle={toggle}/>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="lg">
          <Anchor href="#sobre-mi" onClick={toggle} c="pink" size="xl">Sobre Mí</Anchor>
          <Anchor href="#Servicios" onClick={toggle} c="pink" size="xl">Servicios</Anchor>
          <Anchor href="#contacto" onClick={toggle} c="pink" size="xl">Contacto</Anchor>
        </Stack>
      </AppShell.Navbar>


      <AppShell.Main>
        <PropertyScreen />
      </AppShell.Main>
    </AppShell>
  );
}
