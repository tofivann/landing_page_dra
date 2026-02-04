import {
  Title,
  Button,
  Group,
  Box,
  Container,
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
    <Box component="header" bg="white">
      <Container p="xs">
        <Group justify="space-between">
          <Group gap="xs">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="pink"
            />
            <Anchor href="#inicio" underline="never">
              <Stack align={{ base: 'center', sm: 'flex-start' }}>
                <Title order={3} c="pink" style={{ lineHeight: 1 }} ta={{ base: 'center', sm: 'left' }}>
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
                  ta={{ base: 'center', sm: 'left' }}
                >
                  Ginecologia y Obstetricia
                </Text>
              </Stack>
            </Anchor>
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
      </Container>
    </Box>
  );
}
