import {
  Container,
} from './styles';


import { Header } from '../../components/Header';
import { Balance } from '../../components/Home/Balance';
import { Shortcuts } from '../../components/Home/Shortcuts';
import { Information } from '../../components/Home/Information';

export function Home() {
  return (
    <Container>
      <Header />
      <Balance />
      <Shortcuts />
      <Information />
    </Container>
  );
}
