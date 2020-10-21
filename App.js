import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadStory from './screens/ReadStory.js';
import WriteStory from './screens/WriteStory.js';

import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  ReadStory: { screen: ReadStory},
  WriteStory: { screen: WriteStory},
},
{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon : ({ focused, tintColor  })=>{
      const { routeName } = navigation.state;
      let iconName = "";
      if (routeName === "WriteStory"){
        iconName = "pencil";
      }
      else if(routeName === "ReadStory"){
        iconName = "book";
      }
      return <Icon name={iconName} type='font-awesome' color={tintColor}/>
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const AppContainer = createAppContainer(TabNavigator);