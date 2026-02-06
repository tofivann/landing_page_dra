import { Container, Box, SimpleGrid, Title } from "@mantine/core";

import classes from "./Navbar.module.css";
import { CardServicio } from "./CardServicio";
import type { Icon } from "@tabler/icons-react";

interface Propiedad {
  id: number;
  icon: Icon;
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
        <Title
          order={1}
          className={classes.tituloSubrayado}
          m={60}
          pt={40}
          ta="center"
        >
          Servicios
        </Title>
        <SimpleGrid
          p={"0"}
          m="sm"
          cols={{ base: 1, sm: 3 }}
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
