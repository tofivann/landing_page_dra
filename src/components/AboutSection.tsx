import {
  Box,
  Group,
  Title,
  Container,
  Text,
  Paper,
  Stack, // Importamos Stack
} from "@mantine/core";

import classes from "./Navbar.module.css";
import "@mantine/carousel/styles.css";

export function AboutSection() {
  return (
    <Box id="sobre-mi">
      <Container>
        <Title
          order={1}
          className={classes.tituloSubrayado}
          m={30}
          pt={40}
          ta="center"
        >
          Sobre Mi
        </Title>
        <Paper radius="md" withBorder p="xl" className={classes.inicioBox}>
          <Stack gap="xl">
            <Group justify="center" align="center" gap="xl">
              <Text ta="justify" maw={700}>
                Soy la Dra. Ivonne Sanchez, medica especialista en Ginecologia y
                Obstetricia comprometida con el bienestar integral de mis
                pacientes. Mi enfoque combina experiencia profesional,
                tecnologia de vanguardia y un trato humano y personalizado.
                <br /> <br />
                Creo firmemente que cada mujer merece atencion medica de calidad
                en un ambiente de confianza y respeto.
              </Text>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
