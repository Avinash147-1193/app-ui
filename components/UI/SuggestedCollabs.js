
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
import SuggestedCollabsInnerData from "./SuggestedCollabsInnerData";

const jobs = [
    {
      id: 1,
      title: "Google",
      company: "B.Tech || Mechanical || Interested in CAD Internships",
      location: "12 mutual collabs",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 2,
      title: "Ashika Bansal",
      company: "MBA || XLRI || Interested in Marketing based Internships",
      location: "13 mutual collabs",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 3,
      title: "Avinash Dwivedi",
      company:
        "B.Tech || C.S.E || Here to find a partner expert in react native",
      location: "2 mutual collabs",
      logo: require("../../assets/images/ss.png"),
    },
    {
      id: 4,
      title: "Ashish Kumar",
      company: "M.Tech || A.I || Interested in AI based Internships",
      location: "23 mutual collabs",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 5,
      title: "Avinash Dwivedi",
      company: "B.Tech || Mechanical || Interested in CAD Internships",
      location: "6 mutual collabs",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 6,
      title: "Avinash Dwivedi",
      company: "M.Tech || A.I || Interested in AI based Internships",
      location: "13 mutual collabs",
      logo: require("../../assets/images/ss.png"),
    },
    {
      id: 7,
      title: "Ashika Bansal",
      company: "Shared your page",
      location: "7 mutual collabs",
      logo: require("../../assets/images/google.png"),
    },
    {
      id: 8,
      title: "Avinash Dwivedi",
      company: "Invited to join TechGuru page",
      location: "3 mutual collabs",
      logo: require("../../assets/images/ss1.png"),
    },
    {
      id: 9,
      title: "Kumar Devdas",
      company: "Invited to join Start-Up mantra page",
      location: "6 mutual collabs",
      logo: require("../../assets/images/ss.png"),
    },
    {
      id: 10,
      title: "Saurabh K",
      company: "M.Tech || A.I || Interested in AI based Internships",
      location: "6 mutual collabs",
      logo: require("../../assets/images/ss.png"),
    },
  ];


const SuggestedCollabs = () => {
  const [jobList, setJobList] = useState(jobs);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Suggested Collabs</Text>
      <View style={styles.container}>
        <View style={styles.flatListContainer}>
          <View style={styles.flatListContainerInner}>
            <FlatList
              numColumns={2}
              data={jobList}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <SuggestedCollabsInnerData item={item}/>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              style={styles.flatList}
            />
          </View>
          <TouchableOpacity style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}> See all </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};

export default SuggestedCollabs;

const styles = StyleSheet.create({
  bottomTextContainer: {
    backgroundColor: 'transparent',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    padding: 5,
    flexDirection:'row',
  },
  flatListContainerInner: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomText: {
    fontSize: 14,
    textAlign: "center",
    backgroundColor: 'transparent',
  },
  flatList: {
  },
  titleText: {
    fontSize: 14,
    color: GlobalStyles.colors.primary700,
    textAlign: "center",
    marginBottom: 4,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 14,
    color: GlobalStyles.colors.gray400,
    textAlign: "center",
    marginBottom: 4,
  },
  flatListContainer: {
    borderBottomColor: GlobalStyles.colors.gray400,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderStyle: "solid",
    flex: 1,
    flexDirection: 'column',
  }
});
