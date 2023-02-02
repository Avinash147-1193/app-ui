import React, { useState } from "react";
import IconButton from "./IconButton";
import { GlobalStyles } from "../../constants/GlobalStyles";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";


const jobs = [
    {
      id: 1,
      title: "Google",
      company: "B.Tech || Mechanical || Interested in CAD Internships",
      location: "20 mins ago",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 2,
      title: "Ashika Bansal",
      company: "MBA || XLRI || Interested in Marketing based Internships",
      location: "28 mins ago",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 3,
      title: "Avinash Dwivedi",
      company:
        "B.Tech || C.S.E || Here to find a partner expert in react native",
      location: "1 hour ago",
      logo: require("../../assets/images/ss.png"),
    },
    {
      id: 4,
      title: "Ashish Kumar",
      company: "M.Tech || A.I || Interested in AI based Internships",
      location: "1 hour ago",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 5,
      title: "Avinash Dwivedi",
      company: "Invited to join TechGuru page",
      location: "1 hour ago",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 6,
      title: "Avinash Dwivedi",
      company: "Invited to join TechGuru page",
      location: "1 hour ago",
      logo: require("../../assets/images/ss.png"),
    },
    {
      id: 7,
      title: "Ashika Bansal",
      company: "Shared your page",
      location: "10 hour ago",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 8,
      title: "Avinash Dwivedi",
      company: "Invited to join TechGuru page",
      location: "1 Day ago",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 9,
      title: "Kumar Devdas",
      company: "Invited to join Start-Up mantra page",
      location: "1 day ago",
      logo: require("../../assets/images/ss.png"),
    },
  ];


const RequestPending = () => {
    const [jobList, setJobList] = useState(jobs);
  const handlePress = (job) => {
    // Navigate to job details page or show more details about the job
    console.log("Job selected:", job);
  };

  const handleCheckPress = () => {
    // Navigate to job details page or show more details about the job
    console.log("Job selected:");
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <Text style={styles.titleText}>Pending Requests</Text>
        <FlatList
          data={jobList}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.jobContainer}
                onPress={() => handlePress(item)}
              >
                <View style={styles.leftContainer}>
                  <Image style={styles.logo} source={item.logo} />
                </View>
                <View style={styles.rightContainer}>
                  <Text style={styles.jobTitle}>{item.title}</Text>
                  <Text style={styles.jobCompany}>{item.company}</Text>
                  <Text style={styles.jobLocation}>{item.location}</Text>
                </View>
                <View style={styles.reactionContainer}>
                  <View style={styles.checkButton}>
                    <IconButton
                      style={styles.checkButton}
                      libraryName="AntDesign"
                      icon="checkcircleo"
                      onPress={handleCheckPress}
                      size="28"
                      color={GlobalStyles.colors.primary500}
                    />
                  </View>
                  <View style={styles.crossButton}>
                    <IconButton
                      libraryName="AntDesign"
                      icon="closecircleo"
                      onPress={handleCheckPress}
                      size="28"
                      color={GlobalStyles.colors.primary500}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
        <TouchableOpacity style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}> See all </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequestPending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bottomTextContainer: {
    backgroundColor: 'transparent',
  },
  bottomText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray700,
    textAlign: "center",
  },
  flatList: {
  },
  jobContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary700,
    marginBottom: 10,
    borderRadius: 7,
  },
  titleText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray400,
    textAlign: "center",
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray400,
    textAlign: "center",
    marginBottom: 4,
  },
  leftContainer: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  jobCompany: {
    fontSize: 13,
    color: "gray",
  },
  jobLocation: {
    fontSize: 13,
    color: "gray",
  },
  flatListContainer: {
    marginBottom: 45,
    borderBottomColor: GlobalStyles.colors.gray400,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderStyle: "solid",
  },
  reactionContainer: {
    flexDirection: "row",
    width: 80,
    justifyContent: "space-around",
    alignContent: "center",
  },
});
