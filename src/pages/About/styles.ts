import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #781ba6;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Regular';
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  padding-top: 60px;
  margin-right: 20px;
  margin-bottom: 10px;

  flex-direction: row;
`;

export const Main = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 28px;
`;

export const MetaText = styled.Text`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;