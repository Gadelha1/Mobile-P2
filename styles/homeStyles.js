import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  welcome: {
    fontSize: 22,
    marginBottom: 18,
  },

  card: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2e78b7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userIconText: {
    color: '#fff',
    fontSize: 18,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  menuContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 12,
  },

  menuItem: {
    marginBottom: 8,
  },

  menuClose: {
    marginTop: 8,
  },

  headerTouchable: {
    marginRight: 12,
  },

  errorText: {
    color: 'crimson',
    textAlign: 'center',
    marginBottom: 8,
  },

  modalCancelButton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#979191ff',
    minWidth: 100,
    alignItems: 'center',
  },


    logoutText: {
      color: 'crimson',
    },

  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modalButton: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#2e78b7',
    minWidth: 100,
    alignItems: 'center',
  },

  modalButtonText: {
    color: '#fff',
    fontWeight: '600',
  },

  modalMessage: {
    textAlign: 'center',
    marginBottom: 8,
  },

  /* navbar */
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#2e78b7',
    marginBottom: 8,
  },

  navItem: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  navItemText: {
    fontSize: 16,
    color: '#72a0c9ff',
    fontWeight: '600',
  },

  aboutTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },

  aboutText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },

  aboutLink: {
    color: '#111',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 8,
  },
});

export default styles;
