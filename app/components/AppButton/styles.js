import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 60,
        borderRadius: 18,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis
        marginTop: 10,
    },
    buttonText: {
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18
    },
    textButton: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
    addButton: {
        width: "25%",
        height: 40,
        borderRadius: 14,
        alignItems: 'center', //  x axis
        justifyContent: 'center', // y axis

    }

});

export default styles;