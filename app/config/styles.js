import colors from './colors';
import { StyleSheet, Platform, StatusBar } from 'react-native';
const defaultStyles = StyleSheet.create({
    textSemiBold: {
        color: colors.dark,
        fontSize: 42,
        fontWeight: '600',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});
export default defaultStyles