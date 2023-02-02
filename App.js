import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/GlobalStyles";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
// import SearchBarInput from "./components/UI/SearchBar";
import SearchBar from "react-native-dynamic-search-bar";
import NotificationsPage from "./screens/Notifications";
import Internship from "./screens/Internship";
import Collaborations from "./screens/Collaborations";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Post3 from "./components/Post3";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props = {}) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

function ExpensesOverview() {
  const navigation = useNavigation();
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Post3}
        options={{
          title: "",
          tabBarLabel: "",
          headerTitle: () => (
            <SearchBar
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {}}
              onSearchPress={() => console.log("Search Icon is pressed")}
              onClearPress={() => {}}
              onPress={() => alert("onPress")}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={26}
              style={styles.chat}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <Ionicons
                name="home-outline"
                size={tabInfo.size}
                color={
                  tabInfo.focused
                    ? GlobalStyles.colors.gray700
                    : GlobalStyles.colors.primary700
                }
              />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Collaborations"
        component={Collaborations}
        options={{
          title: "",
          tabBarLabel: "",
          headerTitle: () => (
            <SearchBar
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {}}
              onSearchPress={() => console.log("Search Icon is pressed")}
              onClearPress={() => {}}
              onPress={() => alert("onPress")}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={26}
              style={styles.chat}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <AntDesign
                name="addusergroup"
                size={tabInfo.size}
                color={
                  tabInfo.focused
                    ? GlobalStyles.colors.gray700
                    : GlobalStyles.colors.primary700
                }
              />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Post"
        component={AllExpenses}
        options={{
          title: "",
          tabBarLabel: "",
          headerTitle: () => (
            <SearchBar
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {}}
              onSearchPress={() => console.log("Search Icon is pressed")}
              onClearPress={() => {}}
              onPress={() => alert("onPress")}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={26}
              style={styles.chat}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <AntDesign
                name="plussquareo"
                size={tabInfo.size}
                color={
                  tabInfo.focused
                    ? GlobalStyles.colors.gray700
                    : GlobalStyles.colors.primary700
                }
              />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Notifications"
        component={NotificationsPage}
        options={{
          title: "",
          tabBarLabel: "",
          headerTitle: () => (
            <SearchBar
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {}}
              onSearchPress={() => console.log("Search Icon is pressed")}
              onClearPress={() => {}}
              onPress={() => alert("onPress")}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={26}
              style={styles.chat}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <Ionicons
                name="notifications-outline"
                size={tabInfo.size}
                color={
                  tabInfo.focused
                    ? GlobalStyles.colors.gray700
                    : GlobalStyles.colors.primary700
                }
              />
            </View>
          ),
        }}
      />

      <BottomTabs.Screen
        name="Internships"
        component={Internship}
        options={{
          title: "",
          tabBarLabel: "",
          headerTitle: () => (
            <SearchBar
              style={styles.searchInput}
              placeholder="Search..."
              onChangeText={(text) => {}}
              onSearchPress={() => console.log("Search Icon is pressed")}
              onClearPress={() => {}}
              onPress={() => alert("onPress")}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name="chat-processing-outline"
              size={26}
              style={styles.chat}
              color={GlobalStyles.colors.accent500}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            />
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <AntDesign
                name="rocket1"
                size={tabInfo.size}
                color={
                  tabInfo.focused
                    ? GlobalStyles.colors.gray700
                    : GlobalStyles.colors.primary700
                }
              />
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ title: "Manage Expense", presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    backgroundColor: GlobalStyles.colors.accent500,
    marginBottom: 7,
    width: 270,
  },
  chat: {
    marginLeft: -9,
    paddingLeft: -10,
  },
  navFocused: {
    borderTopColor: GlobalStyles.colors.gray700,
    borderTopWidth: 2,
  },
});
