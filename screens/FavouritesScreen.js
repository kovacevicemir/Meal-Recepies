import React from "react";
import MealList from "../components/MealList";
import { View, Text, StyleSheet } from "react-native";
import {
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const Favourites = (props) => {
  const favMeals = useSelector((state) => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>You dont have Favourite meals yet, start adding some</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },
  text:{
    width:'100%',
    textAlign:'center',
    fontSize:22,
    padding:30
  }
});

Favourites.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Favourites;
