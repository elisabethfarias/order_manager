import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  BackToSignInText,
  BackToSignIn
} from './styles';

const Account: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="email" icon="mail" placeholder="E-mail" />

            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => {}}>Cadastrar</Button>

          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-left" color="#fff" />
        <BackToSignInText>Voltar para página inicial</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default Account;