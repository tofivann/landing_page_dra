import {
  Box,
  Group,
  Title,
  Image,
  Container,
  Text,
  Paper,
  Divider,
  Stack, // Importamos Stack
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./Navbar.module.css";
import "@mantine/carousel/styles.css";
import imagen03 from "../imagenes/Imagen03.png";
import imagen05 from "../imagenes/imagen05.png";
import imagen06 from "../imagenes/imagen06.png";

export function AboutSection() {
  return (
    <Box id="sobre-mi" py="xl">
      <Container>
        <Title order={1} className={classes.tituloSubrayado} mb="lg">
          Sobre Mi
        </Title>

        <Paper radius="md" withBorder p="xl" className={classes.inicioBox}>
          <Stack gap="xl">
            <Group justify="center" align="center" gap="xl">
              <Image
                h={320}
                w={220}
                radius="xl"
                src={imagen03}
                alt="Foto Profesional"
              />
              <Text ta="justify" maw={350}>
                Soy la Dra. Ivonne Sanchez, medica especialista en Ginecologia y
                Obstetricia comprometida con el bienestar integral de mis
                pacientes. Mi enfoque combina experiencia profesional,
                tecnologia de vanguardia y un trato humano y personalizado.
                <br /> <br />
                Creo firmemente que cada mujer merece atencion medica de calidad
                en un ambiente de confianza y respeto.
              </Text>
            </Group>

            <Divider
              my="sm"
              label="Nuestras Instalaciones"
              labelPosition="center"
              color="pink.1"
            />

            <Group justify="center">
              <Carousel
                slideSize="100%"
                height={360}
                w={{ base: "100%", sm: 350 }}
                slideGap="md"
                withIndicators
              >
                <Carousel.Slide>
                  <Image
                    src={imagen05}
                    alt="Consultorio 1"
                    h={360}
                    fit="cover"
                    radius="md"
                  />
                </Carousel.Slide>
                <Carousel.Slide>
                  <Image
                    src={imagen06}
                    alt="Consultorio 2"
                    h={360}
                    fit="cover"
                    radius="md"
                  />
                </Carousel.Slide>
              </Carousel>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
