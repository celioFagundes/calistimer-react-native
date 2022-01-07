import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

class Select extends React.Component {
    state = {
      current: 'Desligado',
    };
    handlePress = opt => () => {
      this.setState({
        current: opt,
      });
      if (this.props.onSelect) {
        this.props.onSelect(opt);
      }
    };
    componentDidMount() {
      this.setState({
        current: this.props.default,
      });
    }
    render() {
      const {options} = this.props;
      const {label} = this.props;
      const {current} = this.state;
  
      return (
        <View>
          <Text style={stylesSelect.label}>{label}</Text>
          <View style={stylesSelect.optView}>
            {options.map(opt => {
              let value= '';
              let label = '';
              if(typeof opt === 'string'){
                  value = opt
                  label = opt
              }
              if(typeof opt === 'object'){
                  value = opt.value
                  label = opt.label
              }
              return (
                <TouchableOpacity
                  key={value}
                  onPress={this.handlePress(value)}>
                  <Text
                    style={[
                      stylesSelect.optText,
                      value === current ? stylesSelect.optSelected : null,
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      );
    }
  }

  const stylesSelect = StyleSheet.create({
    label: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: 32,
      color: '#fff',
      textAlign: 'center',
    },
    optView: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    optSelected: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      borderRadius: 8,
    },
    optText: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: 32,
      color: '#fff',
      margin: 40,
      padding: 15,
      textAlign: 'center',
    },
  });
  export default Select
