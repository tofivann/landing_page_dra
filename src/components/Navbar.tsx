import {
  Title,
  Button,
  Group,
  Stack,
  Text,
  Anchor,
  Burger,
} from "@mantine/core";
import classes from "./Navbar.module.css";

interface NavbarProps {
  opened: boolean;
  toggle: () => void;
}

export function Navbar({ opened, toggle }: NavbarProps) {
  return (
    <Group justify="space-between" h="100%" px="md">
      <Group justify="center">
        <Anchor href="#inicio" underline="never">
          <Stack align="stretch">
            <Title
              order={3}
              c="pink"
              style={{ lineHeight: 1 }}
              ta={{ base: "center", sm: "left" }}
            >
              Dra. Ivonne Sanchez
            </Title>

            <Text
              size="xs"
              c="dimmed"
              className={classes.specialtyText}
              style={{
                lineHeight: 1,
                marginLeft: "2px",
              }}
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
      </Group>
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
