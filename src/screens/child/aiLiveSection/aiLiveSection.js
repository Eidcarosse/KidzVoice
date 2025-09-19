import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/customHeader/header'
import { styles } from './styles'
import Images from '../../../assets/images'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FeelingResult from './component/feelingResult'
import { useNavigation } from '@react-navigation/native'

export default function AiLiveSection() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const [selectedFeeling, setSelectedFeeling] = useState(null);
    const feelings = [
        { emoji: '😊', label: 'Happy', message: "Awesome! Let's keep that smile going 😊", img: Images.HAPPYIMG },
        { emoji: '😢', label: 'Sad', message: "It's okay to feel sad sometimes 💙", img: Images.SADIMG },
        { emoji: '😐', label: 'Okay', message: "Got it, you’re feeling just okay today.", img: Images.OKAYIMG },
        { emoji: '😡', label: 'Angry', message: "Take a deep breath… we’ll calm things down together 😌", img: Images.ANGRYIMG },
    ];

    const selected = feelings.find(f => f.label === selectedFeeling);

    const handleBack = () => {
        if (selectedFeeling) {
            setSelectedFeeling(null);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader isBack={true} onGoBack={handleBack} title={'Ai Live Section'} />

            {!(selected) ? (
                <>
                    <Image source={Images.AIICON} style={styles.img} />

                    <View style={styles.textBox}>
                        <Text style={styles.questionText}>
                            Hi Max! I’m happy to see you again. Before we start, tell me, how do you feel today?
                        </Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        {feelings.map((item, index) => {
                            const isActive = selectedFeeling === item.label;
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.optionBox,
                                        isActive && { backgroundColor: '#007BFF' },
                                    ]}
                                    onPress={() => setSelectedFeeling(item.label)}
                                >
                                    <Text style={[
                                        styles.optionEmoji,
                                        isActive && { color: '#fff' }
                                    ]}>
                                        {item.emoji}
                                    </Text>
                                    <Text style={[
                                        styles.optionText,
                                        isActive && { color: '#fff' }
                                    ]}>
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </>
            ) : (
                <FeelingResult image={Images.AIICON} text={selected.message} />
            )}
        </View>
    )
}
