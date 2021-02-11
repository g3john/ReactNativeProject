import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

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
    publication_date: publicationDate,
    tags,
  } = props.job;
  console.log(props.job);

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
