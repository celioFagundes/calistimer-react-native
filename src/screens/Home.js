import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Button from '../../components/Button';
const Home = props => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>CalisTimer</Text>
      <View>
        <Button
          onPress={() => props.navigation.navigate('Emom')}
          stylesBtn={styles.buttonText}>
          EMOM
        </Button>
        <Button
          onPress={() => props.navigation.navigate('Amrap')}
          stylesBtn={styles.buttonText}>
          AMRAP
        </Button>
        <Button
          onPress={() => props.navigation.navigate('Isometria')}
          stylesBtn={styles.buttonText}>
          Isometria
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D6304A',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
  },
  buttonText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 32,
    color: '#fff',
    margin: 40,
    textAlign: 'center',
  },
});
export default Home;
