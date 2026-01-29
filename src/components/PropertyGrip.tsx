import {
  Stack,
  Container,
  Box,
  Image,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
} from "@mantine/core";

import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";

import { useState, useEffect } from "react";
import { ColorSwatch, CheckIcon } from "@mantine/core";
import "../index.css";
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
    <Box bg="gray.0" mih="100vh" p="lg">
      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} 
        spacing="lg" 
        verticalSpacing="lg">
          {listaServicios.map((servicio) => (
            <CardServicio key={servicio.id} servicio={servicio} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
