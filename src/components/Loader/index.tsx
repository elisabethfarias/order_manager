import React from 'react';
import { ActivityIndicator, View } from "react-native";


import { Container } from './styles';

interface loadingProps {
  loading: boolean;
}

const Loading: React.FC<loadingProps> = ({ loading, children }) => {
  if(loading) {
    return (
      <Container>
        <View>
          <ActivityIndicator size="large" color="#f4ede8" />
        </View>
      </Container>
    )
  }
  
  return (
  <>{children}</>
  );

};

export default Loading;