import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IonIcons from 'react-native-vector-icons/Ionicons';

/* Job props
  id,
  url,
  title,
  companyName,
  category,
  jobType,
  candidateRequiredLocation,
  salary,
  description,
  companyLogoUrl,
  publicationDate,
  tags,
*/

const Job = (props) => {
  const {
    title,
    companyName,
    candidateRequiredLocation,
    companyLogoUrl,
  } = props.job;
  const { navigation } = props;

  const hr = <View style={styles.hr} />;
  return (
    <View>
      {hr}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('JobPage', { job: props.job });
        }}>
        <View style={styles.jobContainer}>
          <View style={styles.logo}>
            {companyLogoUrl ? (
              <FastImage
                style={styles.logo}
                resizeMode={FastImage.resizeMode.contain}
                source={{
                  uri: companyLogoUrl,
                }}
              />
            ) : (
              <IonIcons
                name={'briefcase'}
                size={Dimensions.get('window').width * 0.15}
                color={'grey'}
                style={{ opacity: 0.2 }}
              />
            )}
          </View>
          <View>
            <Text style={styles.jobTitle}>{title}</Text>
            <Text>{companyName}</Text>
            <Text>{candidateRequiredLocation}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  jobContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  hr: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  jobTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    width: Dimensions.get('window').width * 0.75,
  },
  logo: {
    width: Dimensions.get('window').width * 0.15,
    height: Dimensions.get('window').width * 0.15,
    marginRight: 10,
  },
});

export default Job;
