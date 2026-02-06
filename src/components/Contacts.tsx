import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  Anchor,
  ThemeIcon,
  SimpleGrid,
  Paper,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";

export function Contacts() {
  return (
    <Container id="Contactos" size="lg" py={50} pb={50} bg="gray.0">
      <Title order={1} ta="center" className={classes.tituloSubrayado} mb={50}>
        Contacto
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={40} m={50}>
        <Stack gap="xl">
          <Title order={3} c="black">
            Agenda tu Cita
          </Title>
          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={44} radius="md" variant="light" color="pink">
              <IconPhone size={26} />
            </ThemeIcon>
            <div>
              <Text
                size="sm"
                c="dimmed"
                fw={700}
                style={{ textTransform: "uppercase" }}
              >
                Teléfono
              </Text>
              <Anchor
                href="https://wa.me/584147378754"
                size="lg"
                c="pink"
                fw={500}
              >
                +52 (414)-7378754
              </Anchor>
            </div>
          </Group>

          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={44} radius="md" variant="light" color="pink">
              <IconMail size={26} />
            </ThemeIcon>
            <div>
              <Text
                size="sm"
                c="dimmed"
                fw={700}
                style={{ textTransform: "uppercase" }}
              >
                Email
              </Text>
              <Anchor
                href="mailto:ivonne.andreina@gmail.com"
                size="lg"
                c="pink"
                fw={500}
                style={{
                  wordBreak: "break-word",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                ivonne.andreina@gmail.com
              </Anchor>
            </div>
          </Group>

          <Group wrap="nowrap" align="flex-start">
            <ThemeIcon size={44} radius="md" variant="light" color="pink">
              <IconMapPin size={26} />
            </ThemeIcon>
            <div>
              <Text
                size="sm"
                c="dimmed"
                fw={700}
                style={{ textTransform: "uppercase" }}
              >
                Dirección
              </Text>
              <Text size="lg" fw={500} style={{ lineHeight: 1.4 }}>
                Sector la Paez Farmacia Bubuqui
                <br />
                segundo piso
              </Text>
            </div>
          </Group>
        </Stack>

        <Paper
          withBorder
          p="xl"
          radius="md"
          bg="var(--mantine-color-pink-light)"
        >
          <Stack gap="md">
            <Group>
              <IconClock color="var(--mantine-color-pink-filled)" />
              <Title order={4} c="pink">
                Horarios de Atención
              </Title>
            </Group>

            <Group justify="space-between">
              <Text fw={600}>Lunes a Viernes</Text>
              <Text>9:00 AM - 6:00 PM</Text>
            </Group>

            <Group justify="space-between">
              <Text fw={600}>Sábados</Text>
              <Text>10:00 AM - 2:00 PM</Text>
            </Group>

            <Text size="xs" c="dimmed" mt="md" ta="center">
              * Las citas deben programarse con antelación vía WhatsApp o
              teléfono.
            </Text>
          </Stack>
        </Paper>
      </SimpleGrid>
    </Container>
  );
}
