import { ProperyGrip } from "./PropertyGrip";
import { AboutSection } from "./AboutSection";
import { HeroSection } from "./HeroSection";
import { MyJobs } from "./MyJobs";
import { Contacts } from "./Contacts";
import { Box } from "@mantine/core";
import {
  IconUserHeart,
  IconStethoscope,
  IconActivity,
} from "@tabler/icons-react";
export function PropertyScreen() {
  const listaServicios = [
    {
      id: 1,
      area: "Ginecologia General ",
      icon: IconUserHeart,
      servicios: [
        "Consulta ginecológica",
        "Prueba de Papanicolau",
        "Colposcopia",
        "Planificación familiar",
        "Tratamiento de infecciones",
        "Cirugía Ginecológica",
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
        "Atención Posparto",
      ],
    },
    {
      id: 3,
      area: "Medicina Preventiva",
      icon: IconActivity,
      servicios: [
        "Detección de cancer de cuello uterino",
        "Climaterio",
        "Manejo de la menopausia",
        "Chequeos de Rutina",
      ],
    },
  ];

  return (
    <Box w="100%">
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProperyGrip listaServicios={listaServicios}></ProperyGrip>
      <MyJobs></MyJobs>
      <Contacts></Contacts>
    </Box>
  );
}
