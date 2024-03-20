import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

    content: {
        padding: 50,
        alignItems: "center",
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    contentModal: {
        padding: 10,
        alignItems: "center",
        flex: 1,
        backgroundColor: "#e0e0e0"
    },
    titleText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    titleBasic: {
        marginBottom: 20, 
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#c0c0ef',
        margin: 10,
    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 18,
        textAlign: 'center',
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    input: {
        borderWidth: 1,
        borderColor: "#00d",
        backgroundColor: "#eef",
        textAlign: "center",
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 10,
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },
    textInput: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#555",
        textAlign: "center",
        marginBottom: 5,
    }

});