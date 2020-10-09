import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #fe6f03;
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const Buttontext = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
  font-size: 18px;
`;