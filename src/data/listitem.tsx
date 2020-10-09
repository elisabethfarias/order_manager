import React from 'react';
import { Product } from '../data';

import { Container, Text, View } from './stylesitem';

const Item: React.FC<Product> = (props) => {
  return (
    <Container>
        <View>
          <Text>{props.name}</Text>
        </View>
        <View>
          <Text>{props.price}</Text>
        </View>
    </Container>
  );
};

export default Item;