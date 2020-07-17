import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const MEALS = useSelector((state) => state.meals.meals);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //MAKE THIS MEAL FAVOURITE
  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  },[dispatch, mealId]);

  //To prevent infinite loop
  useEffect(() => {
    props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
  }, [selectedMeal, toggleFavouriteHandler]);

  //Explanation:
  //I am creating toggleFav. function that dispatch action...
  //I want to trigger toggleFav. function inside my header
  //I cant use useDispatch function outside component
  //So i am passing params to Navigation
  //Also i am using useEffect to prevent inf. loop because if u change nav it rerenders
  //Also using useCallBack to prevent inf loop as useEffect watching toggleFav change
  //So with useCallBack we are preventing toggleFav. to be recreated and avoiding inf.loop


  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingridient) => {
        return <ListItem key={ingridient}>{ingridient}</ListItem>;
      })}
      <Text style={styles.title}>Steps:</Text>
      {selectedMeal.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  //communicate with MealDetailScreen component
  const title = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("toggleFav");

  return {
    headerTitle: title ? title : "loading",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            toggleFav()
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
