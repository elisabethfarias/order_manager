import React from 'react';
import {
  FlatList
} from 'react-native';
import { Products } from '../../data';
import Item from '../../data/listitem';

import { Container, Title } from './styles';


const MyOrders: React.FC = () => {

  return (
    <Container>
      <Title>Meus pedidos</Title>
      
      <FlatList 
        data={Products}
        renderItem={({ item }) => (
          <Item 
            id={item.id} 
            name={item.name} 
            price={item.price} 
          />
        )}
      />
    </Container>
  )
};

export default MyOrders;