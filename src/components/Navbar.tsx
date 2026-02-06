import {
  Title,
  Button,
  Group,
  Stack,
  Text,
  Anchor,
  Burger,
  Flex,
} from "@mantine/core";
import classes from "./Navbar.module.css";

interface NavbarProps {
  opened: boolean;
  toggle: () => void;
}

export function Navbar({ opened, toggle }: NavbarProps) {
  return (
    <Group justify="space-between" h="100%" px="md" wrap="nowrap">
      <Flex
        direction={{ base: "column", sm: "row" }}
        align="center"
        gap={{ base: 8, sm: "md" }}
        style={{ flex: 1 }}
      >
        <Anchor href="#inicio" underline="never">
          <Stack gap={4}>
            <Title
              order={3}
              c="pink"
              style={{ lineHeight: 2, whiteSpace: "nowrap" }}
              ta={{ base: "center", sm: "left" }}
            >
              Dra. Ivonne Sanchez
            </Title>

            <Text
              size="xs"
              c="dimmed"
              pl={4}
              className={classes.specialtyText}
              style={{ lineHeight: 1, letterSpacing: "0.5px" }}
              ta={{ base: "center", sm: "left" }}
            >
              Ginecologia y Obstetricia
            </Text>
          </Stack>
        </Anchor>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color="pink"
        />
      </Flex>
      <Group visibleFrom="sm">
        <Anchor
          size="lg"
          c="pink"
          href="#sobre-mi"
          underline="never"
          className={classes.navLink}
        >
          Sobre Mi
        </Anchor>
        <Anchor
          c="pink"
          size="lg"
          href="#Servicios"
          underline="never"
          className={classes.navLink}
        >
          Servicios
        </Anchor>
        <Anchor
          c="pink"
          size="lg"
          href="#Mi-trabajo"
          underline="never"
          className={classes.navLink}
        >
          Mi Trabajo
        </Anchor>
        <Anchor
          c="pink"
          size="lg"
          href="#Contactos"
          underline="never"
          className={classes.navLink}
        >
          Contacto
        </Anchor>
        <Button
          className={classes.navLink}
          variant="gradient"
          gradient={{ from: "red", to: "grape", deg: 100 }}
          radius="xl"
          component="a"
          href="https://wa.me/584147378754"
          target="_blank"
        >
          Agenda Tu Cita
        </Button>
      </Group>
    </Group>
  );
}
