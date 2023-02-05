import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
  } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import IconButton from "./IconButton";
import Button from "./Button";
import { Ionicons, MaterialIcons, AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";


const SuggestedCollabsInnerData = ({item}) => {
    console.log(item)
      //console.log("Job selected:", item);
    const handlePress = (job) => {
      // Navigate to job details page or show more details about the job
      //console.log("Job selected:", job);
    };
  
    const handleCheckPress = () => {
      // Navigate to job details page or show more details about the job
      //console.log("Job selected:");
    };

    return (<View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.jobContainer}
          onPress={() => handlePress(item)}
        >
          <View style={styles.rightContainer}>
            <Image style={styles.logo} source={item.logo} />
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <View style={styles.mutualCollabContainer}>
                <AntDesign name="earth" size={14} color={GlobalStyles.colors.primary700} />
                <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.collabButton}>Collab+</Button>
            </View>
            
          </View>
            
        </TouchableOpacity>
      </View>);
}

export default SuggestedCollabsInnerData;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray700,
    },
    collabButton: {
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    mutualCollabContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    jobContainer: {
        flexDirection: "column",
        alignContent: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: GlobalStyles.colors.primary500,
        marginBottom: 8,
        borderRadius: 7,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 6,
      },

      leftContainer: {
        flex: 1,
        alignContent: 'center',
      },
      rightContainer: {
        flex: 1,
        paddingLeft: 10,
      },

      jobTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary700,
        textAlign: 'center',
      },
      logo: {
        width: 70,
        height: 70,
        resizeMode: "contain",
        alignItems: 'center',
        marginLeft: '22%',
      },
      jobCompany: {
        fontSize: 13,
        color: GlobalStyles.colors.primary700,
        textAlign: 'center',
        marginBottom: 5
      },
      jobLocation: {
        fontSize: 13,
        color: GlobalStyles.colors.primary700,
        textAlign: 'center',
        marginBottom: 5,
        marginLeft: 5
      },

      reactionContainer: {
        flexDirection: "column",
        width: 80,
        justifyContent: "space-around",
        alignContent: "center",
      },


});