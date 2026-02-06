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

import imagen03 from "../imagenes/Imagen03.png";
import classes from "./Navbar.module.css";

export function HeroSection() {
  return (
    <Box
      id="inicio"
      className={classes.inicioBox}
      pt={{ base: 20, sm: 80 }}
      pb={{ base: 40, sm: 90 }}
    >
      <Container>
        <Group justify="space-between" p="sm">
          <Group style={{ flex: 1 }}>
            <Stack>
              <Title
                order={1}
                c="black"
                ta="left"
                fz={{ base: "2.2rem", sm: "3rem" }}
              >
                Cuidado Integral de la{" "}
                <Text span c="pink" fz={{ base: "2.2rem", sm: "3rem" }}>
                  Salud Femenina
                </Text>
              </Title>

              <Text maw="350" ta="justify">
                Atencion medica especializada con calidez humana y la mas alta
                calidad profesional. Tu bienestar es mi prioridad
              </Text>

              <Group justify="center">
                <Button
                  className={classes.navLink}
                  c="white"
                  variant="gradient"
                  gradient={{ from: "red", to: "grape", deg: 100 }}
                  radius="xl"
                  component="a"
                  href="https://wa.me/584147378754"
                  target="_blank"
                  size="lg"
                >
                  Agendar Consulta
                </Button>

                <Button
                  className={classes.navLink}
                  c="black"
                  variant="gradient"
                  gradient={{ from: "white", to: "red", deg: 100 }}
                  radius="xl"
                  component="a"
                  href="#Servicios"
                  size="lg"
                >
                  Conocer Servicios
                </Button>
              </Group>
            </Stack>
          </Group>
          <Group justify="center" w={{ base: "100%", sm: "40%" }}>
            <Image
              radius="md"
              w={{ base: "100%", sm: 500 }}
              h={{ base: "auto", sm: 500 }}
              src={imagen03}
              alt="Foto Profesional"
              fit="cover"
              style={{
                objectPosition: "center 0%",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                border: "1px solid var(--mantine-color-pink-1)",
              }}
            />
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
