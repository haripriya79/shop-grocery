import { StyleSheet } from 'react-native';

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
    }
});

export default styles;