import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Job = (props) => {
  const {
    id,
    url,
    title,
    companyName,
    category,
    jobType,
    candidateRequiredLocation,
    salary,
    description,
  } = props.job;
  console.log('job here', props);

  const hr = <View style={styles.hr} />;
  return (
    <View>
      {hr}
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>{title}</Text>
        <View style={styles.row}>
          <Text>{companyName}</Text>
          {salary && <Text style={styles.rightColumn}>{salary}</Text>}
        </View>
        <View style={styles.row}>
          <Text>{candidateRequiredLocation}</Text>
          {jobType && <Text style={styles.rightColumn}>{jobType}</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    maxWidth: '100%',
    padding: 10,
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  rightColumn: {
    alignSelf: 'flex-end',
  },
});

export default Job;
