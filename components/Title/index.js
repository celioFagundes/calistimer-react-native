import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Title = ({title, subTitle}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 200,
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
});
export default Title;
