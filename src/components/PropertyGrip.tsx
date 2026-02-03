import { Container, Box, SimpleGrid, Title } from "@mantine/core";

import classes from "./Navbar.module.css";
import { CardServicio } from "./CardServicio";

interface Propiedad {
  id: number;
  area: string;
  servicios: string[];
}

interface ProperyGripProps {
  listaServicios: Propiedad[];
}

export function ProperyGrip({ listaServicios }: ProperyGripProps) {
  return (
    <Box id="Servicios" bg="gray.0">
      <Container>
        <Title order={1} className={classes.tituloSubrayado}>
          Servicios
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="lg"
          verticalSpacing="lg"
        >
          {listaServicios.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
