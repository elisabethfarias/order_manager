import React from 'react';

import { Container, Title, Text, Image, Header, Main, MetaText } from './styles';

import profileImg from '../../assets/images/perfil.jpg';
import Icon from 'react-native-vector-icons/Feather';

const About: React.FC = () => {
  return (
    <Container>

      <Header>
        <Image source={profileImg} />
        <Text>
          Autora: Elisabeth Farias
        </Text>
      </Header>

      <Main>
        <Title>Informações sobre o aplicativo</Title>
        <Text>
          Aplicativo de acompanhamento de pedidos, em sua primeira versão.
        </Text>
      </Main>
      
      <MetaText>
        <Icon name="mail" color="#fff" />
        <Text> e-mail: elisabethfarias7@gmail.com</Text>
      </MetaText>

      <MetaText>
        <Icon name="phone" color="#fff" />
        <Text> (93) 99159-4420</Text>
      </MetaText>
        
       
    </Container>
  )
};

export default About;