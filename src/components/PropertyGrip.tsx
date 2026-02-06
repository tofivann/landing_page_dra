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
        <Title order={1} className={classes.tituloSubrayado} mt={60} p={40}>
          Servicios
        </Title>
        <SimpleGrid
          p={"0"}
          m="sm"
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
