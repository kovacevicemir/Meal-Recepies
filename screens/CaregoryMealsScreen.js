import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const CaregoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
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

export default CaregoryMealsScreen
