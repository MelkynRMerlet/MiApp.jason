import { StyleSheet, View, Image, Text,  } from "react-native";


export default function BadBunny(){
    return(

        <View>
            
          <Image source={require('./assets/BadBunny.jpeg')} style={styles.badBunny}/>

          <Image source={require('./assets/Perfil.png')} style={styles.perfil}/> 
          <Text style={styles.TextoPerfil}>Luis Lovo</Text>
          <Text style={styles.TPN2}>12 hours ago</Text>
          <Image source={require('./assets/Campana.png')} style={styles.Campana}/>

          <Text style={styles.TextoN1}> Bad Bunny en El Salvador </Text>
          <Text style={styles.TextoN2} > La gira del artista puertorriqueño lo ha llevado a diferentes ciudades de latinoamérica, este sábado finalmente será el turno de nuestro país. </Text>

          <Image source={require('./assets/Ubicación.png')} style={styles.ubicacion}/>
          <Text style={styles.TextUbi}> Estadio Cuscatlán </Text>

          <Image source={require('./assets/Calendario.png')} style={styles.Calendario}/>
          <Text style={styles.TextCal}> Dom. 30 de Mar</Text>

          <Image source={require('./assets/Corazon.png')} style={styles.Corazon}/>
          <Text style={styles.TextCor}> Tikets disponibles </Text>

        </View>
    )
}


const styles=StyleSheet.create ({
    badBunny:{
        width: 340,
        height: 350,
        borderRadius: 15,
        marginLeft:0,
        marginRight: 0,
        marginTop: -70
    },
    perfil:{
        width: 50,
        height: 50,
        alignItems:'left',
        marginTop: 10 
    },
    TextoPerfil:{
        fontSize: 20,
        marginLeft:60,
        marginTop:-50,
    },
    TPN2:{
        fontSize: 10,
        marginLeft: 60,
    },
    Campana:{
        marginLeft:310,
        marginTop: -30,
        width: 25,
        height: 25
    },

    TextoN1:{
        fontSize: 35,
        marginTop: 25,
        textAlign:'center',
    },
    TextoN2:{
        fontSize: 15,
        marginTop: 5,
        textAlign:'left',
        
    },
    ubicacion:{
        width: 25,
        height: 25,
        marginTop: 20,
        marginLeft: 35
        
    },
    TextUbi:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },
    Calendario:{
        width: 25,
        height: 25,
        marginLeft: 35,
        marginTop: 20
        
    },
    TextCal:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },
    Corazon:{
        width: 25,
        height: 25,
        marginLeft: 35,
        marginTop: 20
    },
    TextCor:{
        fontSize: 15,
        marginLeft: 70,
        marginTop: -20
    },


})