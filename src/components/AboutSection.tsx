import {
  Box,
  Group,
  Title,
  Image,
  Container,
  Text,
  Paper,
} from "@mantine/core";
import classes from "./Navbar.module.css";

import imagen03 from "../imagenes/Imagen03.png";

export function AboutSection() {
  return (
    <Box id="sobre-mi" m="lg">
      <Box p="sm">
        <Container>
          <Title order={1} className={classes.tituloSubrayado}>
            Sobre Mi
          </Title>
        </Container>
      </Box>

      <Box p="sm">
        <Container>
          <Paper  radius="md" withBorder className={classes.inicioBox}>
            <Group p="xl" justify="center" align="center">
              <Image
                h={320}
                w={220}
                radius="xl"
                src={imagen03}
                alt="Foto Profesional"
              />
              <Text ta="justify">
                Soy la Dra. Ivonne Sanchez , medica especialista en Ginecologia
                y Obstetricia comprometida con el bienestarintegral de mis
                pacientes. mi enfoque combina experiencia profesional ,
                tecnolofia de vanguardia y un trato humano y personalizado.{" "}
                <br />
                Creo firmemetne que cada mujer merece atencion medica de calidad
                en un ambiente de confianza y respeto. Mi mision es acompañarte
                en cada etapa de tu vida con el mejor cuidado posible.
              </Text>
            </Group>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
