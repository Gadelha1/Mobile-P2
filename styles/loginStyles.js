import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 12, borderRadius: 6 },
  registerRow: { flexDirection: 'row', marginTop: 16, justifyContent: 'center' },
  link: { color: '#2e78b7' },
  message: { marginTop: 12, textAlign: 'center' },
  success: { color: 'green' },
  error: { color: 'crimson' },
});

export default styles;
