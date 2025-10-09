import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.primary ? '#FA824C' : '#FFF'};
  border-color: #FA824C;
  border-width: 1px;
  padding: 14px 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;