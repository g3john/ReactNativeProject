import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobList from '../jobList';

const SavedPage = (props) => {
  const { jobs, navigation } = props;
  return (
    <View>
      {jobs.length > 0 ? (
        <View>
          <JobList ref={null} jobs={jobs} navigation={navigation} />
        </View>
      ) : (
        <View>
          <Ionicons name={'star'} size={40} color={'black'} />
          <Text>No favourites!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SavedPage;
