import styled from "styled-components/native";

const Frame = styled.TouchableOpacity`
  padding: 12px;
  background-color: #9c03fe;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
`;

export function IconFrame({ children }) {
  return (
    <Frame>
      {children}
    </Frame>
  );
}
