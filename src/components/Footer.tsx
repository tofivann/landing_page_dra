import { Container, Text, Group, Stack, Divider, Anchor } from "@mantine/core";
import classes from "./Navbar.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Stack gap="md" align="center">
          <Stack gap={0} align="center">
            <Text fw={700} size="xl">
              Dra. Ivonne Sánchez
            </Text>
            <Text size="sm" style={{ opacity: 0.9 }}>
              Ginecología y Obstetricia
            </Text>
          </Stack>

          <Divider
            w="100%"
            labelPosition="center"
            color="rgba(255,255,255,0.2)"
          />

          <Group
            justify="space-between"
            w="100%"
            className={classes.bottomFooter}
          >
            <Text size="xs" style={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Dra. Ivonne Sánchez. Todos los
              derechos reservados.
            </Text>

            <Text size="xs" style={{ opacity: 0.5 }}>
              Desarrollado por{" "}
              <Anchor
                href="https://github.com/tofivann"
                target="_blank"
                c="inherit"
                underline="hover"
                fw={500}
              >
                Iván Sánchez
              </Anchor>
            </Text>
          </Group>
        </Stack>
      </Container>
    </footer>
  );
}
