import React from 'react'
import { View,Text , TouchableOpacity, StyleSheet} from 'react-native'
const Home = (props) => {
    return (
        <View style = {styles.wrapper}>
            <Text style = {styles.title}>CalisTimer</Text>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Emom')}>
                <Text style = {styles.buttonText}>EMOM</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Amrap')}>
                <Text style = {styles.buttonText}>Amrap</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Isometria')}>
                <Text style = {styles.buttonText}>Isometria</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontFamily:"Ubuntu-Bold",
        fontSize:40,
        color:'#fff'
    },
    buttonText:{
        fontFamily:"Ubuntu-Regular",
        fontSize:32,
        color:'#fff'
    }
})
export default Home
