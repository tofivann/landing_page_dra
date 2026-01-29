import { useState } from "react";

import { Navbar } from "./Navbar";
import { ProperyGrip } from "./PropertyGrip";
import { Reflection } from "@gfazioli/mantine-reflection";
import {
  Box,
  Group,
  Title,
  Image,
  Stack,
  Container,
  Text,
  Mark,
  Button,
  Paper,
  SimpleGrid,
} from "@mantine/core";


import imagen from "../imagenes/imagen.png";
import imagen02 from "../imagenes/imagen02.png";
import imagen03 from "../imagenes/Imagen03.png";
import classes from "./Navbar.module.css";

export function PropertyScreen() {
  const listaServicios = [
    {
      id: 1,
      area: "Ginecologia General ",
      servicios: [
        "Consulta ginecologica",
        "Prueba de Papanicolau",
        "Colposcopia",
        "Planificacion familiar",
        "Tratamiento de infecciones",
        "Cirugia Ginecologica",
        "Colocación y retiro de implantes subdermicos y T de cobre"
      ],
    
    },
    {
      id: 2,
      area: "Control Prenatal",
      servicios: [
        "Seguimiento de embarazo",
        "Ultrasonidos obtétricos",
        "Monitoreo fetal",
        "Orientación prenatal",
        "Cirugia Obstetrica",
        "Atencion Posparto",
      ],
    },
    {
      id: 3,
      area: "Medicina Preventiva",
      servicios: [
        "Detección de cancer",
        "Climaterio",
        "Manejo de la menopausia",
        "Chequeos de Rutina",
      ],
    
    },
  ];

  return (
    <Container>
      <Box>
        <Navbar />

        <Box pt="sm">
          <Box id="inicio" className={classes.inicioBox}>
            <Container>
              <Group justify="space-between" p="sm">
                <Group>
                  <Stack align="center">
                    <Title order={1} c="black">
                      Cuidado Integral de la
                    </Title>
                    <Title order={1} c="pink">
                      Salud Femenina
                    </Title>
                    <Text maw="350" ta="justify">
                      Atencion medica especializada con calidez humana y la mas
                      alta calidad profesional. Tu bienestar es mi prioridad
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
               <Box id="sobre-mi" p="sm">
            <Container>
              <Title order={1} className={classes.tituloSubrayado}>
                Sobre Mi
              </Title>
            </Container>
          </Box>

          <Box  p="sm">
            <Container>
             
                <Paper
                  p="xl"
                  radius="md"
                  withBorder
                  className={classes.inicioBox}
                >
                  <Group p="xl" justify="center" align="center">
                  <Image
                    h={320} 
                    w={220}
                    radius="xl" 
                    src={imagen03}
                    alt="Foto Profesional"
                  />
                    <Text ta="justify">
                      Soy la Dra. Ivonne Sanchez , medica especialista en
                      Ginecologia y Obstetricia comprometida con el
                      bienestarintegral de mis pacientes. mi enfoque combina
                      experiencia profesional , tecnolofia de vanguardia y un
                      trato humano y personalizado. <br />
                      Creo firmemetne que cada mujer merece atencion medica de
                      calidad en un ambiente de confianza y respeto. Mi mision
                      es acompañarte en cada etapa de tu vida con el mejor
                      cuidado posible.
                    </Text>
                  </Group>
                </Paper>
         
            </Container>
          </Box>

          <Box id="sobre-mi" p="sm">
            <Container>
              <Title order={1} className={classes.tituloSubrayado}>
                Servicios
              </Title>
            </Container>
          </Box>
          <Box p="sm">
            <Container>
              <ProperyGrip listaServicios={listaServicios}></ProperyGrip>
            </Container>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
