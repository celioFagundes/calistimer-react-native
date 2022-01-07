import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Select from '../../components/Select';
import Title from '../../components/Title';
import configIcon from '../../assets/config-icon.png';
import playIcon from '../../assets/play-icon.png';
const EMOM = () => {
  return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <ScrollView style={styles.wrapper}>
        <Title title="EMOM" subTitle={'Every minute on the minute'} />
        <Image source={configIcon} />
        <Select
          default={30}
          label="Alertas"
          options={[
            {value: 0, label: 'Desligado'},
            {value: 15, label: '15s'},
            {value: 30, label: '30s'},
            {value: 45, label: '45s'},
          ]}
          onSelect={opt => console.log(opt)}
        />
        <Select
          default={0}
          label="Contagem regressiva"
          options={[
            {value: 1, label: 'Sim'},
            {value: 0, label: 'Não'},
          ]}
          onSelect={opt => console.log(opt)}
        />
        <View >
          <Text style={styles.label}>Quantos Minutos</Text>
          <TextInput
            defaultValue="15"
            style={styles.minutes}
            autoComplete='off'
          />
          <Text style={styles.label}> minutos</Text>
        </View>
        <Image source={playIcon} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D6304A',
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
  label: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
  },
  minutes: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 64,
    color: '#fff',
    textAlign: 'center',
  },
});
export default EMOM;
