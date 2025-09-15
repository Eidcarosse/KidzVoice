import React from "react";
import { View, Platform, StatusBar as RNStatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWrapper } from "react-native-screen-wrapper";

const StatusBarWrapper = ({
  children,
  edges = ['top'],
  scrollType,
}) => {
  if (Platform.OS === "ios") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScreenWrapper
          statusBarColor="#FFFFFF"
          barStyle="dark-content"
          scrollType={scrollType}
          style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        >
          {children}
        </ScreenWrapper>
      </SafeAreaView>
    );
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} edges={edges}>
        {children}
      </SafeAreaView>
    </>
  );
};

export default StatusBarWrapper;
