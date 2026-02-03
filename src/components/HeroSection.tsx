import {
  Box,
  Group,
  Title,
  Image,
  Stack,
  Container,
  Text,
  Button,
} from "@mantine/core";

import imagen from "../imagenes/imagen.png";

import classes from "./Navbar.module.css";

export function HeroSection() {
  return (
    <Box id="inicio" className={classes.inicioBox}>
      <Container>
        <Group justify="space-between" p="sm" ta={"justify"}>
          <Group>
            <Stack align="center">
              <Title order={1} c="black">
                Cuidado Integral de la
              </Title>
              <Title order={1} c="pink">
                Salud Femenina
              </Title>
              <Text maw="350" ta="justify">
                Atencion medica especializada con calidez humana y la mas alta
                calidad profesional. Tu bienestar es mi prioridad
              </Text>

              <Group>
                <Button
                  className={classes.navLink}
                  c="white"
                  variant="gradient"
                  gradient={{ from: "red", to: "grape", deg: 100 }}
                  radius="xl"
                >
                  Agendar Consulta
                </Button>

                <Button
                  className={classes.navLink}
                  c="black"
                  variant="gradient"
                  gradient={{ from: "white", to: "red", deg: 100 }}
                  radius="xl"
                >
                  Conocer Servicios
                </Button>
              </Group>
            </Stack>
          </Group>
          <Group p="sm">
            <Image
              radius="md"
              w={{ base: "100%", sm: 350 }}
              maw={{ base: "100%", sm: 500 }}
              src={imagen}
            />
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
