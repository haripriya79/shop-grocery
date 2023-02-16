import { Platform } from 'react-native';

import colors from './colors';

export default {
    textSemiBold: {
        color: colors.dark,
        fontSize: 42,
        fontWeight: '600',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
};