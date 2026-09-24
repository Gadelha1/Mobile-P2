import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efe2bf',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  
  title: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',

  },

  card: {
    width: 400,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    backgroundColor: '#b4dfb3',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frase: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },

  btnBox: {
    width: '100%',
    marginTop: 28,
    alignItems: 'center',
  },
  
  btn: {
    flex: 1,
    paddingHorizontal: 7,
    paddingVertical: 14,
    backgroundColor: '#a8c896',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    width: 150,
  },

  btnSec: {
    backgroundColor: '#e84624',
    flex: 1,
    paddingHorizontal: 7,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    width: 150,
  },

  btnTxt: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
