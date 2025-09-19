import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../../components/customHeader/header';
import Images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeelingResult from '../aiLiveSection/component/feelingResult';
import { styles } from './styles';
import ScreensName from '../../../routes/routes';

export default function AiLiveQuestion() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()

    const handleBack = () => {

        navigation.navigate(ScreensName.MAGICBACKPACK);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader isBack={true} onGoBack={handleBack} title={'Ai Live Section'} />
            <FeelingResult image={Images.AIICON} text={"Max, what did you notice in Sami’s story? Why was the magic ball helpful?"} />
        </View>
    )
}