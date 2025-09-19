import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image
} from 'react-native';
import StatusBarWrapper from '../../../components/customStatusbar';
import { height } from '../../../utils/Dimensions';
import { styles } from './styles';
import Images from '../../../assets/images';
import { Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import ScreensName from '../../../routes/routes';

const MagicBackpackScreen = () => {
    const navigation = useNavigation()

    const handleContinue = () => {
        // navigation.navigate(ScreensName.QUESTIONAIRE)
        // navigation.navigate(ScreensName.AILIVESECTION)
        navigation.navigate(ScreensName.AILIVEVEDIOSECTION)

    };
    return (
        <StatusBarWrapper>
            <View style={styles.container}>

                <Text style={styles.title}>For Max</Text>

                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>
                        This is your magic backpack.{"\n"}
                        Let's pack it with your dreams and secrets so I can know you better!
                    </Text>
                </View>

                <View style={styles.imgContainer}>
                    <Image source={Images.AIICON} style={styles.img} />
                </View>

                <Button onPress={handleContinue} title={"Let's Started"} btnStyle={styles.btnStyle} />
            </View>
        </StatusBarWrapper >
    );
};



export default MagicBackpackScreen;