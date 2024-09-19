import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const Filme = () => {
    return (
        <View style={style.container}>
            <View style={style.navb}>
               
                <Text style={style.textoT}>Viagens que quero fazer</Text>
            </View>
            <ScrollView contentContainerStyle={style.box}>
                <View style={style.box3}>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/rj.jpg')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}> RIO DE JANEIRO </Text>
                            <Text style={style.P2}> BRASIL </Text>
                        </View>
                    </View>

                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/rc.jpg')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}> RECIFE </Text>
                            <Text style={style.P2}> BRASIL </Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                        <Image style={style.img} source={require('../../../assets/images/gramado.jpg')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}> GRAMADOS </Text>
                            <Text style={style.P2}> BRASIL </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default Filme

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    navb: {
        width: '100%',
        height: 60,
        backgroundColor: '#5DD08F',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    box: {
        flex: 1,
        padding: 20,
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    box3: {
        marginBottom: 20
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    boxT: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    P1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    P2: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
    },
});