import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';


const CardsPokedex = ({id,nome, urlImage}) => {
    return(
        <View>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imagePont}source={require('../../assets/imagePont.svg')} /> 
                    <Image style={styles.imageEsfera}source={require('../../assets/imageEsfera.svg')} />
                    <Image style={styles.imageBicho}source={urlImage}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.idCard}>#{id} </Text>
                    <Text style={styles.nameCard}>{nome}</Text>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8BBE8A',
        width: '334px',
        height:'125px',
        borderRadius: '15px',
        marginTop: '20px'
    },
    idCard: {  
        fontWeight: 'bold',
        color: 'rgba(23, 23, 27, 0.6)'
    },
    content: {
        margin: '20px'
    },
    nameCard: {
        color:'#FFFFFF',
        fontSize: '26px',
        fontWeight: '700',        
    },
    imagePont: {
        height: '32px',
        width: '74px',
        left: '130px',
        top:'10px',
        position:'absolute'
    },
    imageEsfera: {
        height:'145px',
        width: '145px',
        left:'200px',
        position:'absolute'
    
    },
    imageBicho: {
        height:'130px',
        width: '130px',
        left:'200px',
        position:'absolute'
    
    }
        
        

})

export default CardsPokedex;