import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
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

export default MealDetailScreen
