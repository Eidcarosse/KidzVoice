import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarWrapper from "../../components/customStatusbar";
import { Button, RoleSelection, SocialLogin } from "../../components";
import styles from "./styles";
import Images from "../../assets/images";
import { CommonActions, useNavigation } from "@react-navigation/native";
import {
  getStoredValue,
  infoToastMessage,
  setUserRole,
  storeValue,
} from "../../utils/Methods";
import ScreensName from "../../routes/routes";
import { useTranslation } from "react-i18next";
import { Menu, MenuDivider, MenuItem } from "react-native-material-menu";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../utils/AppColors";

export default function SignIn() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [childData, setChildData] = useState();
  const [parentData, setParentData] = useState();

  const [languageMenu, setLanguageMenu] = useState(false);

  const [loading, setLoading] = useState(true);

  const openLanuageMenu = () => {
    setLanguageMenu(true);
  };

  const closeLanuageMenu = () => {
    setLanguageMenu(false);
  };

  const getChildData = async () => {
    const childDataRes = await getStoredValue("childData");
    const parentRes = await getStoredValue("parentData");
    let languageRes = await getStoredValue("language");

    console.log("Selected Language Data", languageRes);

    if (languageRes) {
      if (languageRes?.lang === "english") {
        setSelectedLanguage("english");
      } else {
        setSelectedLanguage("german");
      }
    } else {
      setSelectedLanguage("german");
    }
    console.log(
      "Child Data Response",
      childDataRes,
      "   Parent Data",
      parentRes
    );

    setChildData(childDataRes);
    setParentData(parentRes);
  };

  useEffect(() => {
    getChildData();
    setLoading(false);
  }, []);

  const onSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleGoogleLogIn = async () => {
    console.log("Google Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleFacebookLogIn = async () => {
    console.log("Facebook Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleAppeLogIn = async () => {
    console.log("Apple Login");

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleXLogIn = async () => {
    console.log("Simple Sign In", selectedRole);

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        navigation.navigate(ScreensName.PARENTPROFILENFO);
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleSignIn = async () => {
    console.log("Simple Sign In", selectedRole);

    const res = await setUserRole(selectedRole?.title);
    if (selectedRole?.title) {
      if (selectedRole?.title === "Parent") {
        if (childData?.id && parentData?.isLogin) {
          // navigation.navigate(ScreensName.CHILDPROGRESS);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: ScreensName.CHILDPROGRESS }],
            })
          );
        } else {
          navigation.navigate(ScreensName.PARENTPROFILENFO);
        }
      } else if (selectedRole?.title === "Learner") {
        navigation.navigate(ScreensName.ACCOUNT);
      } else if (selectedRole?.title === "Teacher") {
        navigation.navigate(ScreensName.COACHDASHBOARDTABS);
      } else {
        navigation.navigate(ScreensName.COACHACCOUNT);
      }
    }
  };

  const handleGuest = () => {
    console.log("Guest Mode");
    infoToastMessage("Guest Mode", "Guest Mode Coming Soon");
  };
  return (
    <StatusBarWrapper scrollType={"scroll"}>
      <ScrollView>
        <View style={styles.menuView}>
          <Menu
            visible={languageMenu}
            onRequestClose={closeLanuageMenu}
            style={styles.menuStyle}
            anchor={
              <Pressable
                style={styles.menuAnchorStyle}
                onPress={openLanuageMenu}
              >
                <Text>{t(`signIn.${selectedLanguage}`)}</Text>
                <MaterialIcons name="arrow-drop-down" size={16} />
              </Pressable>
            }
          >
            <MenuItem
              style={styles.menuItemStyle}
              onPress={() => {
                storeValue("language", { lang: "english" });
                i18n.changeLanguage("en");
                setSelectedLanguage("english");
                setLanguageMenu(false);
              }}
            >
              {t(`signIn.english`)}
            </MenuItem>

            <MenuDivider color={colors.gray} />

            <MenuItem
              style={styles.menuItemStyle}
              onPress={() => {
                storeValue("language", { lang: "german" });
                i18n.changeLanguage("de");
                setSelectedLanguage("german");
                setLanguageMenu(false);
              }}
            >
              {t(`signIn.german`)}
            </MenuItem>
          </Menu>
        </View>
        <Text style={styles.welcomeText}>{t(`signIn.welcome`)}</Text>

        <RoleSelection selected={selectedRole} onSelection={setSelectedRole} />

        <SocialLogin
          title={t(`signIn.continueGoogle`)}
          image={Images.GOOGLE}
          onPress={handleSignIn}
        />
        <SocialLogin
          title={t(`signIn.continueFacebook`)}
          image={Images.FACEBOOK}
          onPress={handleSignIn}
        />

        <SocialLogin
          title={t(`signIn.continueApple`)}
          image={Images.APPLE}
          onPress={handleSignIn}
        />

        <SocialLogin
          title={t(`signIn.continueX`)}
          image={Images.X}
          onPress={handleSignIn}
        />

        <Text style={styles.alreadyText}>{t(`signIn.alreadyUser`)}</Text>
        <Button title={t(`signIn.signIn`)} onPress={handleSignIn} />
        <Button
          title={t(`signIn.continueAsGuest`)}
          onPress={handleGuest}
          btnStyle={styles.guestBtnStyle}
          textStyle={styles.guestBtnText}
        />
      </ScrollView>
    </StatusBarWrapper>
  );
}
