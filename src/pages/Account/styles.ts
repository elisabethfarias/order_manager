import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #781ba6;
  padding: 0 30px ${Platform.OS === 'android' ? 140  : 40}px;padding: 0 30px 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #781ba6;
  border-top-width: 1px;
  border-color: #781ba6;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const  BackToSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;