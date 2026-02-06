import { AppShell, Stack, Anchor, Container } from "@mantine/core";

import { Navbar } from "./Navbar";
import { PropertyScreen } from "./PropertyScreen";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";

export function Demo() {
  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const scrolled = scroll.y > 20;
  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: "100%",
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={0}
    >
      <AppShell.Header
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.7)" : "white",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container size="lg" h="100%">
          <Navbar opened={opened} toggle={toggle} />
        </Container>
      </AppShell.Header>

      <AppShell.Navbar>
        <Stack gap="lg">
          <Anchor href="#sobre-mi" onClick={toggle} c="pink" size="xl">
            Sobre Mí
          </Anchor>
          <Anchor href="#Servicios" onClick={toggle} c="pink" size="xl">
            Servicios
          </Anchor>
          <Anchor
            href="https://wa.me/584147378754"
            target="_blank"
            onClick={toggle}
            c="pink"
            size="xl"
          >
            Agenda tu cita
          </Anchor>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <PropertyScreen />
      </AppShell.Main>
    </AppShell>
  );
}
