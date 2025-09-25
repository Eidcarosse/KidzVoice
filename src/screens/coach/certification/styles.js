// styles.js
import { StyleSheet } from 'react-native';
import { fonts } from '../../../utils/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileStyle: {
        marginLeft: 12,
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.medium,
        color: '#000',
    },
    email: {
        fontSize: 14,
        color: 'gray',
        marginTop: 2,
        fontFamily: fonts.regular,
    },

    certifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginVertical: 15,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#fff',
        minWidth: 20
    },
    iconBox: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#d7d2cfff'
    },
    certBox: {
        flex: 1,
    },
    certifiedstyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    certText: {
        fontSize: 16,
        marginRight: 5,
        color: '#000',
        fontFamily: fonts.medium
    },
    levelText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 2,
        fontFamily: fonts.regular
    },

    downloadBtn: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 25,
        shadowColor: '#007BFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 3,
    },
    downloadText: {
        color: '#fff',
        fontSize: 10,
        fontFamily: fonts.medium
    },

    badgeLabel: {
        fontSize: 15,
        color: '#000',
        marginTop: 30,
        fontFamily: fonts.medium,
    },
    shareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        gap: 10,
    },
    shareBtn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 15,
        paddingVertical: 15,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    shareText: {
        marginLeft: 6,
        fontSize: 14,
        color: '#000',
        fontFamily: fonts.light
    },
});

export default styles;
