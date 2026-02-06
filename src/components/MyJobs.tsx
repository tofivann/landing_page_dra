import { SimpleGrid, Container, Title, Box, Text } from "@mantine/core";
import { ImageCard } from "./ImageCard";
import imgGineco from "../imagenes/imagen06.png";
import imgCirugia from "../imagenes/Imagen07.jpeg";
import imgPostparto from "../imagenes/imagen05.png";
import classes from "./Navbar.module.css";
interface ServiceCardProps {
  src: string;
  title: string;
}

export function MyJobs() {
  const services: ServiceCardProps[] = [
    {
      src: imgGineco,
      title: "Control Ginecológico",
    },
    {
      src: imgCirugia,
      title: "Intervención Obstétrica",
    },
    {
      src: imgPostparto,
      title: "Atencion Posparto",
    },
  ];

  return (
    <Box id="Mi-trabajo">
      <Container bg="white" py={50}>
        <Title
          order={2}
          ta="center"
          mb={40}
          fz={32}
          className={classes.tituloSubrayado}
        >
          Mi Trabajo
        </Title>
        <Text maw="500" ta="center" mx="auto" mb={50}>
          Cada día tengo el privilegio de acompañar a mis pacientes en los
          momentos más importantes de sus vidas.
        </Text>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="xl"
          verticalSpacing="xl"
        >
          {services.map((service, index) => (
            <ImageCard key={index} src={service.src} title={service.title} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
