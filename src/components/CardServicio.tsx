import { Stack, Image, Text, Card, Group, Button , List} from "@mantine/core";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon } from "@hugeicons/core-free-icons";

import { useState } from "react";
import { ColorSwatch, CheckIcon } from "@mantine/core";
import "../index.css";

interface Propiedad {
  id: number;
  area: string;
  servicios: string[];
  icon: React.ElementType;
}
interface CardProps {
  servicio: Propiedad;
}

export function CardServicio({ servicio }: CardProps) {
  return (
    <Card key={servicio.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
       
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{servicio.area}</Text>
      </Group>

       <List>
       {
        servicio.servicios.map((item, idex)=>(

            <List.Item>{item}</List.Item>
        ))
       }
    </List>
    </Card>
  );
}
