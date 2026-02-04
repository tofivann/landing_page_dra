import { ProperyGrip } from "./PropertyGrip";
import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { Box, Container } from "@mantine/core";
import { IconUserHeart, IconStethoscope, IconActivity } from '@tabler/icons-react';
export function PropertyScreen() {
  const listaServicios = [
    {
      id: 1,
      area: "Ginecologia General ",
      icon: IconUserHeart,
      servicios: [
        "Consulta ginecologica",
        "Prueba de Papanicolau",
        "Colposcopia",
        "Planificacion familiar",
        "Tratamiento de infecciones",
        "Cirugia Ginecologica",
        "Colocación y retiro de implantes subdermicos y T de cobre",
      ],
    },
    {
      id: 2,
      area: "Control Prenatal",
      icon: IconStethoscope,
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
      icon: IconActivity,
      servicios: [
        "Detección de cancer",
        "Climaterio",
        "Manejo de la menopausia",
        "Chequeos de Rutina",
      ],
    },
  ];

  return (
    <Box>
      <Container>
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProperyGrip listaServicios={listaServicios}></ProperyGrip>
      </Container>
    </Box>
  );
}
