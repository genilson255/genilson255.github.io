import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        marginTop: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    // progressBar: {
    //     width: '100%',
    //     height: 10,
    //     borderRadius: 5,
    //     marginVertical: 20,
    // },
    optionsContainer: {
        width: '100%',
        maxHeight: 250,
    },
    option: {
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 5,
    },
    optionText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },
    answerButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        width: '70%'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scoreText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#333',
    },
    restartButton: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    darkModeSwitch: {
        alignSelf: 'flex-end',
        marginRight: 20,
    },
})