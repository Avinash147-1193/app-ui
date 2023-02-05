import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
import TopBarElements from "./components/UI/TopBarElements";


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
          headerTitle: (tabInfo) => (
            <TopBarElements props={tabInfo}/>
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
          headerTitle: (tabInfo) => (
            <TopBarElements props={tabInfo}/>
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
          presentation: "modal",
          title: "",
          tabBarLabel: "",
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
          headerTitle: (tabInfo) => (
            <TopBarElements props={tabInfo}/>
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
          headerTitle: (tabInfo) => (
            <TopBarElements props={tabInfo}/>
          ),
          tabBarIcon: (tabInfo) => (
            <View style={tabInfo.focused ? styles.navFocused : ""}>
              <View style={StyleSheet.iconContainer}>
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
  navTextActiveStyle: {
    color: GlobalStyles.colors.gray700,
  },
  navTextPassiveStyle: {
    color: GlobalStyles.colors.gray500,
  },
  navText: {
    color: GlobalStyles.colors.primary700,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',

  },
  navIcon: {
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    justifyContent: "center",
    alignItems: "center",
  },
  navFocused: {
    borderTopColor: GlobalStyles.colors.gray700,
    borderTopWidth: 2,
  },
});
