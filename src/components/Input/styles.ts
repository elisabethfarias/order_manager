import styled from 'styled-components/native';
import Feathericon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f4ede8;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const Icon = styled(Feathericon)`
  margin-right: 16px;
`;