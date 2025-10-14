import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreensName from "../routes";
import { CoachDashboard, Mentors, Profile, Resume } from "../../screens";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";

const TAB = createBottomTabNavigator();

export default function CoachBottomTabs() {
  return (
    <TAB.Navigator screenOptions={{ headerShown: false }}>
      <TAB.Screen
        name={ScreensName.COACHDASHBOARD}
        component={CoachDashboard}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <TAB.Screen
        name={ScreensName.MENTORS}
        component={Mentors}
        options={{
          title: "Mentors",
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name={"users"} size={20} color={color} />
          ),
        }}
      />
      <TAB.Screen
        name={ScreensName.RESUME}
        component={Resume}
        options={{
          title: "Resume",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={"book-outline"} size={24} color={color} />
          ),
        }}
      />
      <TAB.Screen
        name={ScreensName.PROFILE}
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name={"user"} size={24} color={color} />
          ),
        }}
      />
    </TAB.Navigator>
  );
}
