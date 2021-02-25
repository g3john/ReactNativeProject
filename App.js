/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import store from './store';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import JobSearchPage from './components/jobSearchPage';
import SavedPage from './components/savedPage';
import JobPage from './components/jobPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobSearch = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobSearchPage"
        component={JobSearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JobPage"
        component={JobPage}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

const Saved = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavedPage"
        component={SavedPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="JobPage" component={JobPage} />
    </Stack.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Job Search') {
                iconName = focused ? 'list' : 'list-outline';
              } else if (route.name === 'Saved') {
                iconName = focused ? 'star' : 'star-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            showLabel: true,
            showIcon: true,
          }}>
          <Tab.Screen name="Job Search" component={JobSearch} />
          <Tab.Screen name="Saved" component={Saved} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
