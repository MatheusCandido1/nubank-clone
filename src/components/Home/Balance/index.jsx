import {
  BalanceContainer,
  BalanceHeader,
  BalanceDetails
} from './styles';

import { Entypo } from '@expo/vector-icons';
import { Text } from '../../Text';

export function Balance() {
  return (
    <BalanceContainer>
      <BalanceHeader>
        <Text weight="600" size="20" color="">Conta</Text>
        <Entypo name="chevron-right" size={24} color="#8b8c92" />
      </BalanceHeader>
      <BalanceDetails>
        <Text weight="600" size="20" color="">R$ 1,14</Text>
      </BalanceDetails>
  </BalanceContainer>
  )
}
