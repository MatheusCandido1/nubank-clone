import { useState } from "react";

import { FlatList } from "react-native";
import {
  ShortcutsContainer,
  ShortcutIconContainer,
  ShortcutItemContainer
} from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "../../Text";

export function Shortcuts() {
  const [shortcuts] = useState([
    { id: 1, name: 'Área Pix', icon: 'bank-outline' },
    { id: 2, name: 'Pagar', icon: 'barcode' },
    { id: 3, name: 'Transferir', icon: 'account-arrow-right-outline' },
    { id: 4, name: 'Depositar', icon: 'email-newsletter' },
    { id: 5, name: 'Recarga', icon: 'cellphone' },
    { id: 6, name: 'Cobrar', icon: 'message-question' },
    { id: 7, name: 'Doação', icon: 'cards-heart-outline' },
    { id: 8, name: 'Internac.', icon: 'globe-model' },
    { id: 9, name: 'Investir', icon: 'chart-line' },
    { id: 10, name: 'Caixinhas', icon: 'apps-box' },
  ]);

  const ShortcutItem = ({ item }) => {
    return (
      <ShortcutItemContainer style={{
        marginLeft: item.id === 1 ? 0 : 6,
        marginRight: 6
      }}>
        <ShortcutIconContainer>
          <MaterialCommunityIcons name={item.icon} size={30} color="#000" />
        </ShortcutIconContainer>
        <Text weight="600" color="#000" size="14">{item.name}</Text>
      </ShortcutItemContainer>
    )
  }

  return (
    <ShortcutsContainer>
      <FlatList
        horizontal
        data={shortcuts}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={ShortcutItem}
      />
    </ShortcutsContainer>
  )
}
