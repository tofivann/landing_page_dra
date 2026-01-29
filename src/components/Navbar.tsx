import {
  Title,
  Button,
  Group,
  Box,
  Container,
  Stack,
  Text,
  Anchor,
} from "@mantine/core";
import classes from "./Navbar.module.css";

export function Navbar() {
  console.log("Mis clases son:", classes);

  return (
    <Box component="header" bg="white">
      <Container p="xs">
        <Group justify="space-between">
          <Group gap="xs">
            <Stack align="flex-star">
              <Title order={3} c="pink">
                Dr.Ivonne Sanchez
              </Title>

              <Text c="dimmed" className={classes.specialtyText}>
                Ginecologia y Obstetricia
              </Text>
            </Stack>
          </Group>
          <Group>
            <Anchor
              size="lg"
              c="pink"
              href="https://mantine.dev/"
              target="_blank"
              underline="never"
              className={classes.navLink}
            >
              Sobre Mi
            </Anchor>
            <Anchor
              c="pink"
              size="lg"
              href="https://mantine.dev/"
              target="_blank"
              underline="never"
              className={classes.navLink}
            >
              Servicios
            </Anchor>
            <Button
              className={classes.navLink}
              variant="gradient"
              gradient={{ from: "red", to: "grape", deg: 100 }}
              radius="xl"
            >
              Agenda Tu Cita
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
