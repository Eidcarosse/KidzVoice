import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/customHeader/header'
import { styles } from './styles'
import Images from '../../assets/images'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function AiLiveSection() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader title={'Ai Live Secction'} />

            <Image source={Images.AIICON} style={styles.img} />

        </View>
    )
}