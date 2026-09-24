import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  app:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
    
  },

  title:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 20,
    
  },
  input:{
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 300,
    textAlign: 'center',
    margin: 5,
    marginBottom: 5,
    backgroundColor: '#c1ccbbff',
    paddingHorizontal: 8,
  },
  inputContainer:{
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f0f8f7ff',
    height: 300,
  },
  btn:{
    borderRadius: 5,
    borderWidth: 2,
    height: 36,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#379f7a',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    justifyContent: 'center'
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginVertical: 2,
    backgroundColor: '#eaf7e1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b3e099',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  removeBtn: {
    marginLeft: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff8888',
  },
  removeBtnText: {
    color: '#ff3333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default styles;
