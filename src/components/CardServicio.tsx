import { Text, Card, Group, List } from "@mantine/core";

import "../index.css";

interface Propiedad {
  id: number;
  area: string;
  servicios: string[];
}
interface CardProps {
  servicio: Propiedad;
}

export function CardServicio({ servicio }: CardProps) {
  return (
    <Card key={servicio.id} shadow="sm" padding="lg" radius="md" withBorder m="sm">
      <Card.Section></Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{servicio.area}</Text>
      </Group>

      <List>
        {servicio.servicios.map((item) => (
          <List.Item c="pink">{item}</List.Item>
        ))}
      </List>
    </Card>
  );
}
