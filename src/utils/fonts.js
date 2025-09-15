import {
    useFonts,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_700Bold,
    Jost_800ExtraBold
} from '@expo-google-fonts/jost';

export const fonts = {
    light: 'Jost_300Light',
    regular: 'Jost_400Regular',
    medium: 'Jost_500Medium',
    bold: 'Jost_700Bold',
    extraBold: 'Jost_800ExtraBold'
};

export const useLoadFonts = () =>
    useFonts({
        [fonts.light]: Jost_300Light,
        [fonts.regular]: Jost_400Regular,
        [fonts.medium]: Jost_500Medium,
        [fonts.bold]: Jost_700Bold,
        [fonts.extraBold]: Jost_800ExtraBold
    });
