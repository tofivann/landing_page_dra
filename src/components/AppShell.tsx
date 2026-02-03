import { AppShell} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navbar } from './Navbar';
import { PropertyScreen } from './PropertyScreen';

export function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
     
    >
      <AppShell.Header>
       <Navbar/>
      </AppShell.Header>

    

      <AppShell.Main><PropertyScreen/></AppShell.Main>
    </AppShell>
  );
}