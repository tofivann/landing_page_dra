import { Text, Card, Group, List, Center } from "@mantine/core";
import type { Icon } from "@tabler/icons-react";
import "../index.css";

interface Propiedad {
  id: number;
  icon: Icon;
  area: string;

  servicios: string[];
}
interface CardProps {
  servicio: Propiedad;
}

export function CardServicio({ servicio }: CardProps) {
  return (
    <Card
      key={servicio.id}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      m="sm"
    >
      <Card.Section p="md" bg="var(--mantine-color-pink-0)">
        <Center>
          <servicio.icon
            size={48}
            stroke={1.5}
            color="var(--mantine-color-pink-6)"
          />
        </Center>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{servicio.area}</Text>
      </Group>

      <List>
        {servicio.servicios.map((item, index) => (
          <List.Item key={index} c="pink">
            {item}
          </List.Item>
        ))}
      </List>
    </Card>
  );
}
