import { StyleSheet } from 'react-native';

const estiloDetalhes = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1D1D1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    borda: {
        backgroundColor: '#54695A',
        width: '80%',
        height: '100%',
        borderRadius: 10,
    },

    texto: {
        fontSize: 25,
        color: '#00000',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },

    titulo: {
        fontSize: 50,
        color: '#8C0823',
        fontWeight: 'bold',
        padding: 10,
        width: '90%',
        height: '90%',
        textAlign: "center",
        
    
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        backgroundColor: '#3D4D42',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#8C0823',
        fontWeight:'bold'
    },
});
export default estiloDetalhes;