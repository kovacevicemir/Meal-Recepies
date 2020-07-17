import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.primaryColor}
        value={props.isGlutenFree}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const [isLactose, setisLactose] = useState(false);
  const [isVegan, setisVegan] = useState(false);
  const [isVegetarian, setisVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactose,
      veganFree: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters)
  },[isGlutenFree,isLactose,isVegetarian,isVegan]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        onChange={(newValue) => setisGlutenFree(newValue)}
        isGlutenFree={isGlutenFree}
        label="Gluten free"
      />
      <FilterSwitch
        onChange={(newValue) => setisLactose(newValue)}
        isGlutenFree={isLactose}
        label="Lactose free"
      />
      <FilterSwitch
        onChange={(newValue) => setisVegan(newValue)}
        isGlutenFree={isVegan}
        label="Vegan free"
      />
      <FilterSwitch
        onChange={(newValue) => setisVegetarian(newValue)}
        isGlutenFree={isVegetarian}
        label="Vegetarian"
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "FiltersScreen",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={() => {
            //filter is just pointer to inside Component function... function inside FiltersScreen
            const filter = navData.navigation.getParam("save");
            filter()
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
  },
});

export default FiltersScreen;
