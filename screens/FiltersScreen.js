import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const FiltersScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>FiltersScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sceen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FiltersScreen
