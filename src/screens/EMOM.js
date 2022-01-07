import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'


class Select  extends React.Component{
    state = {
        current : 'Desligado'
    }
    handlePress = opt => () =>{
        this.setState({
            current: opt
        })
        if(this.props.onSelect){
            this.props.onSelect(opt)
        }
    }
    render(){
        const {options} = this.props
        const {label} = this.props
        const {current} = this.state
        
        return(
            <View>
                <Text style = {stylesSelect.label}>{label}</Text>
                <View style = {stylesSelect.optView}>
                    {options.map(opt =>(
                        <TouchableOpacity key = {opt}  onPress={this.handlePress(opt)}>
                            <Text style = {[stylesSelect.optText,opt === current ? stylesSelect.optSelected : null]}>{opt}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
    
}
const EMOM = () => {
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.title}>EMOM</Text>
            <Select label = 'Alertas'options = {['Desligado', '15s', '30s', '45s']} onSelect = {opt => console.log(opt)}/>
            <Select label = 'Contagem regressiva'options = {['Sim', 'Não']} onSelect = {opt => console.log(opt)}/>
        </View>
    )
}
const stylesSelect = StyleSheet.create({
    label: {
      fontFamily: 'Ubuntu-Bold',
      fontSize: 48,
      color: '#fff',
      textAlign: 'center',
    },
    optView:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    optSelected: {
        
        backgroundColor:'rgba(255,255,255,0.4)',
        borderRadius:8
    },
    optText: {
      fontFamily: 'Ubuntu-Regular',
      fontSize: 32,
      color: '#fff',
      margin: 40,
      padding:15,
      textAlign: 'center',
    },
  });
const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#D6304A',
      alignItems:'center',
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
export default EMOM
