import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Job = (props) => {
  const {
    id,
    url,
    title,
    company_name: companyName,
    category,
    job_type: jobType,
    candidate_required_location: candidateRequiredLocation,
    salary,
    description,
    company_logo_url: companyLogoUrl,
  } = props.job;
  console.log(
    title,
    companyName,
    candidateRequiredLocation,
    salary,
    jobType,
    companyLogoUrl,
  );

  const hr = <View style={styles.hr} />;
  return (
    <View>
      {hr}
      <View style={[styles.jobContainer, styles.row]}>
        <View style={styles.logo}>
          {companyLogoUrl && (
            <Image
              style={styles.logo}
              source={{
                uri: companyLogoUrl,
              }}
            />
          )}
        </View>
        <View>
          <Text style={styles.jobTitle}>{title}</Text>
          <Text>{companyName}</Text>
          <Text>{candidateRequiredLocation}</Text>
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
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default Job;
