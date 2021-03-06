import React, { forwardRef } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Job from '../job';

const JobList = forwardRef((props, ref) => {
  const {
    jobs,
    nonDisplayedJobs,
    savedJobs,
    displayMore,
    isSaved,
    navigation,
  } = props;
  const renderItem = ({ item }) => (
    <Job job={item} navigation={navigation}></Job>
  );
  const footerComponent =
    !isSaved && nonDisplayedJobs && nonDisplayedJobs.length ? (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    ) : null;
  const jobsToShow = isSaved ? savedJobs : jobs;
  return (
    <View>
      {jobsToShow && (
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
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  activityIndicator: {
    padding: 10,
  },
});

export default JobList;
