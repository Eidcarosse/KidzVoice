import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../components/customHeader/header';
import Images from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeelingResult from '../aiLiveSection/component/feelingResult';
import ScreensName from '../../../routes/routes';
import { styles } from './styles';
import SuccessModal from '../../../components/successModal/success';

export default function AiLiveExample() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()

    const question = '2 + 5';
    const correctAnswer = 7;
    const options = [5, 7, 8, -7];

    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [modalVisible, setModalVisible] = useState(true)

    const handleSelect = (option) => {
        setSelected(option);
        setIsCorrect(option === correctAnswer);
    };
    const handleBack = () => {

        navigation.navigate(ScreensName.MAGICBACKPACK);
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top || 5 }]}>
            <CustomHeader isBack={true} onGoBack={handleBack} title={'Ai Live Section'} />
            <FeelingResult image={Images.AIICON} text={"Ali, let’s try this together. Look at this math problem. Imagine your own magic ball is holding all the distractions. Focus only on the numbers. Can you solve it?"} />
            <View style={styles.questionContainer}>
                <Text style={styles.question}>
                    {question}
                </Text>
                <Text style={styles.equalStyle}>=</Text>
                <View style={styles.answerBox}>
                    <Text style={styles.answerText}>
                        {selected}
                    </Text>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.optionButton,
                            selected === option && option === correctAnswer && styles.correctOption,
                            selected === option && option !== correctAnswer && styles.incorrectOption,
                        ]}
                        onPress={() => handleSelect(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {isCorrect !== null && (
                <Text style={styles.resultText}>
                    {isCorrect
                        ? '🎉 Yes! You did it. Just like Sami, you used your magic ball.'
                        : '❌ Try again!'}
                </Text>
            )}

            {isCorrect && (
                <SuccessModal
                    title={"Max earns: ⭐ x10 + 💎 x1"}
                    subtitle={
                        "Amazing work, Ali! You’re one step closer to becoming a Focus Hero. Keep collecting stars to unlock your next adventure."
                    }
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    questionOf={"AiExample"}
                />
            )}
        </View>
    )
}