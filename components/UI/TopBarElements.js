import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/GlobalStyles";
import SearchBar from "react-native-dynamic-search-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";


function TopBarElements() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerSearchAndChat}>
      <TouchableOpacity>
        <AntDesign
          style={styles.drawerOpener}
          name="menuunfold"
          size={24}
          color={GlobalStyles.colors.primary700}
        />
      </TouchableOpacity>
      <SearchBar
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={(text) => {}}
        onSearchPress={() => console.log("Search Icon is pressed")}
        onClearPress={() => {}}
        onPress={() => alert("onPress")}
      />
      <MaterialCommunityIcons
        name="chat-processing-outline"
        size={26}
        style={styles.chat}
        color={GlobalStyles.colors.accent500}
        onPress={() => {
          navigation.navigate("ManageExpense");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  drawerOpener: {},
  headerSearchAndChat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    backgroundColor: GlobalStyles.colors.accent500,
    marginBottom: 7,
    width: 270,
    marginLeft: 25,
  },
  drawerOpener: {
    marginVertical: 6,
  },
  chat: {
    marginVertical: 10,
    marginLeft: 20,
  },
});

export default TopBarElements;
