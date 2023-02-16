import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    helloText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.grey,
    }
});
export default styles;