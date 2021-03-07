import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  DeviceEventEmitter,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Job from '../job';

const JobList = (props) => {
  const {
    jobs,
    nonDisplayedJobs,
    savedJobs,
    displayMore,
    isSaved,
    navigation,
  } = props;

  const ref = useRef(null);
  const renderItem = ({ item }) => (
    <Job job={item} navigation={navigation}></Job>
  );
  const footerComponent =
    !isSaved && nonDisplayedJobs && nonDisplayedJobs.length > 0 ? (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    ) : null;
  const jobsToShow = isSaved ? savedJobs : jobs;
  useEffect(() => {
    DeviceEventEmitter.addListener('event.scrollToTop', () => {
      if (
        ref !== null &&
        ref.current !== null &&
        typeof ref.current.scrollToIndex === 'function'
      ) {
        ref.current.scrollToIndex({ animated: true, index: 0 });
      }
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {jobsToShow && jobsToShow.length > 0 ? (
        <React.Fragment>
          <FlatList
            ref={ref}
            data={jobsToShow}
            keyExtractor={(item) => item.id.toString()}
            updateCellsBatchingPeriod={100}
            removeClippedSubviews={true}
            onEndReached={() => displayMore()}
            onEndReachedThreshold={5}
            renderItem={renderItem}
            ListFooterComponent={footerComponent}
          />
        </React.Fragment>
      ) : (
        <View style={styles.noJobsContainer}>
          <Ionicons
            name={'briefcase-outline'}
            size={40}
            color={Colors.primary}
          />
          <Text>No jobs found. Try expanding your filters</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    padding: 10,
  },
  noJobsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default JobList;
