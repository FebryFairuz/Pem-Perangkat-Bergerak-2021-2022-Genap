import { SafeAreaView, StyleSheet, Text, View } from "react-native"

const SafeAreaViewComponent = () =>{
    return(
        <SafeAreaView style={styles.container} >
            <View>
                <Text style={ {fontSize:42, color:"purple"} } >IBIK</Text>
                <Text style={styles.subHeading} >P. Perangkat bergerak</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    subHeading:{
        textAlign:"center",
        fontWeight:"bold"
    }
})

export default SafeAreaViewComponent