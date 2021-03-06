import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobList from '../jobList';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SavedPage = (props) => {
  const { jobs, navigation } = props;
  const hasSavedJobs = jobs.length > 0;
  const containerStyle = hasSavedJobs ? {} : styles.container;
  return (
    <View style={containerStyle}>
      {jobs.length > 0 ? (
        <View>
          <JobList ref={null} isSaved={true} navigation={navigation} />
        </View>
      ) : (
        <View style={styles.container}>
          <Ionicons name={'star-outline'} size={40} color={Colors.primary} />
          <Text>No saved jobs</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedPage;
