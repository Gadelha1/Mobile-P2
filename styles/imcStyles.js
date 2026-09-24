import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  main: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32, 
    color: '#2e8b57', 
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  input: {
    borderColor: '#4682b4', 
    borderWidth: 2,
    width: 300,
    fontSize: 25,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: '#add8e6',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  result_label: {
    fontSize: 24, 
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2e8b57', 
    padding: 10,
  },
  result: {
    textAlign: 'center',
    fontSize: 22, 
    color: '#000', 
  },
});

export default styles;
