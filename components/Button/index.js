import React from 'react';
import {TouchableOpacity, Text, } from 'react-native';

const Button = ({onPress,children, stylesBtn}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={stylesBtn}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
