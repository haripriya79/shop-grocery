import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    card: {
        height: 250,
        width: 170,
        borderColor: '#E2E2E2',
        borderRadius: 18,
        borderWidth: 1,
        margin: 8

    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: "contain",
        borderRadius: 18
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        paddingTop: 8,
        paddingLeft: 8
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '500',

        paddingLeft: 8,
        color: colors.grey,
    },
    price: {
        fontSize: 14,
        fontWeight: "600",
        paddingLeft: 8,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 8,
        PaddingTop: 8,
        alignItems: 'center'
    }

});
export default styles;