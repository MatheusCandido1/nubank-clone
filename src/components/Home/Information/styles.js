import styled from 'styled-components/native';

export const InformationContainer = styled.View`
  flex: 1;
`;

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #f0f1f5;
  padding: 16px;
  border-radius: 16px;
`;

export const OtherInformationContainer = styled.View`
  margin-top: 24px;
`;

export const OtherInformationItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: #f0f1f5;
  padding: 24px;
  border-radius: 16px;
  width: 255px;
`;
