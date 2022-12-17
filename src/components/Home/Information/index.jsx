import { useState } from "react";

import {
  CardContainer,
  InformationContainer,
  OtherInformationContainer,
  OtherInformationItem
} from "./styles";

import { Feather } from "@expo/vector-icons";

import { Text } from "../../Text";
import { FlatList, View } from "react-native";

export function Information() {
  const [informations] = useState([
    {id: 1, text: "Taxas menores que 0,99% em remessas internacionais"},
    {id: 2, text: "Conheça a Conta PJ: prática, e livre de burocracia para seu..."},
    {id: 3, text: "Convide amigos para o Nubank e desbloqueie brasões incríveis"},
  ]);

  const formatText = (text, item) => {
    if (item === 1) {
      const normalText = text.substring(0, 5)
      const highlightedText = text.substring(5, 23)
      const normalText2 = text.substring(23, )

      return { normalText, highlightedText, normalText2 }
    }
    if (item === 2) {
      const normalText = text.substring(0, 10)
      const highlightedText = text.substring(10, 18)
      const normalText2 = text.substring(18, )

      return { normalText, highlightedText, normalText2 }
    }

    if (item === 3) {
      const normalText = text.substring(0,0)
      const highlightedText = text.substring(0, 28)
      const normalText2 = text.substring(28, )

      return { normalText, highlightedText, normalText2 }

    }
  }

  const Cards = () => {
    return (
      <CardContainer>
        <Feather name="credit-card" color="#000" size={24} />
        <Text
          color="#000"
          size={14}
          weight="600"
          style={{ marginLeft: 16 }}
        >
          Meus Cartões
        </Text>
      </CardContainer>
    )
  }

  const OtherInformations = () => {
    return (
      <OtherInformationContainer>
      <FlatList
        data={informations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <OtherInformationItem
            style={{
              marginLeft: item.id === 1 ? 0 : 8,
              marginRight: 8
            }}
          >
            <Text
              color="#000"
              size={14}
              weight="300"
            >
              {formatText(item.text, item.id).normalText}
                <Text
                  color="#830ad1"
                  size={14}
                  weight="500"
                >
                  {formatText(item.text, item.id).highlightedText}
                </Text>
              {formatText(item.text, item.id).normalText2}
            </Text>
          </OtherInformationItem>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      </OtherInformationContainer>
    )

  }

  return (
    <InformationContainer>
      <View
        style={{
          paddingHorizontal: 24
        }}
      >
        <Cards />
      </View>
      <View
        style={{
          paddingLeft: 24
        }}
      >
      <OtherInformations />
      </View>
    </InformationContainer>
  )
}
