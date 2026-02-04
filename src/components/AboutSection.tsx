import {
  Box,
  Group,
  Title,
  Image,
  Container,
  Text,
  Paper,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./Navbar.module.css";
import "@mantine/carousel/styles.css";
import imagen03 from "../imagenes/Imagen03.png";
import imagen05 from "../imagenes/imagen05.png";
import imagen06 from "../imagenes/imagen06.png";
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
        <Container size={"xl"}>
          <Paper radius="md" withBorder className={classes.inicioBox}>
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
                y Obstetricia comprometida con el bienestar integral de mis
                pacientes. mi enfoque combina experiencia profesional ,
                tecnologia de vanguardia y un trato humano y personalizado.
                <br />
                Creo firmemetne que cada mujer merece atencion medica de calidad
                en un ambiente de confianza y respeto. Mi mision es acompañarte
                en cada etapa de tu vida con el mejor cuidado posible.
              </Text>
              <Carousel
                slideSize="70%"
                height={360}
                w={300}
                slideGap="md"
                withIndicators
              >
                <Carousel.Slide>
                  <Image
                    src={imagen05}
                    alt="Consultorio 1"
                    h={360}
                    w="100%"
                    fit="cover"
                    radius="md"
                  />
                </Carousel.Slide>

                <Carousel.Slide>
                  <Image
                    src={imagen06}
                    alt="Consultorio 2"
                    h={360}
                    w="100%"
                    fit="cover"
                    radius="md"
                  />
                </Carousel.Slide>

                <Carousel.Slide>
                  <Image
                    src={imagen05}
                    h={360}
                    w="100%"
                    fit="cover"
                    radius="md"
                  />
                </Carousel.Slide>
              </Carousel>
            </Group>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
