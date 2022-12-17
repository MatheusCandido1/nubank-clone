import { useState } from 'react';
import {
  Container,
  Navbar,
  RightIconsContainer,
  WelcomeContainer
} from './styles';

import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  Feather
 } from '@expo/vector-icons';
import { IconFrame } from '../IconFrame';
import { Text } from '../Text';

export function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const handleToggleHidden = () => {
    setIsHidden((prevState) => !prevState);
  }
  return (
    <Container>
      <Navbar>
        <IconFrame>
          <MaterialIcons name="image-search" size={28} color="#fff" />
        </IconFrame>
        <RightIconsContainer>
          <Ionicons
            onPress={handleToggleHidden}
            name={isHidden ? "eye-outline":"eye-off-outline"}
            size={22}
            color="#fff"
            style={{ marginHorizontal: 12}}
           />
           <AntDesign
            name="questioncircleo"
            size={22}
            color="#fff"
            style={{ marginHorizontal: 12}}
          />
          <Feather
            name="user"
            size={22}
            color="#fff"
            style={{ marginHorizontal: 12}}
          />
        </RightIconsContainer>
      </Navbar>
      <WelcomeContainer>
        <Text color="#FFF" weight="700" size="18"> Olá, Candin</Text>
      </WelcomeContainer>
    </Container>
  );
}
