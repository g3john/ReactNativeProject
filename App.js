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
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { store, persistor } from './store';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import JobSearchPage from './components/jobSearchPage';
import SavedPage from './components/savedPage';
import JobPage from './components/jobPage';
import FilterPage from './components/filterPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobSearch = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.white },
      }}>
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
      <Stack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

const Saved = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: Colors.white },
      }}>
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
      <PersistGate loading={null} persistor={persistor}>
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
              activeTintColor: Colors.primary,
              inactiveTintColor: Colors.dark,
              inactiveBackgroundColor: Colors.lighter,
              showLabel: true,
              showIcon: true,
              labelStyle: styles.bottomTabText,
            }}>
            <Tab.Screen name="Job Search" component={JobSearch} />
            <Tab.Screen name="Saved" component={Saved} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
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
  bottomTabText: {
    fontSize: 12,
  },
});

export default App;
