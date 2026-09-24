import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/homeStyles';
import { MenuModal, AboutModal, PasswordModal, UsernameModal } from '../assets/modais/modaisExport';
import { useHomeScreen } from './home/useHomeScreen';
import HomeActionCards from './home/HomeActionCards';

export default function HomeScreen({ route, navigation }) {
  const {
    user,
    aboutVisible,
    setAboutVisible,
    menuVisible,
    setMenuVisible,
    pwdModalVisible,
    setPwdModalVisible,
    currentPwd,
    setCurrentPwd,
    newPwd,
    setNewPwd,
    confirmPwd,
    setConfirmPwd,
    msg,
    setMsg,
    usernameModalVisible,
    setUsernameModalVisible,
    newUsername,
    setNewUsername,
    usernamePwd,
    setUsernamePwd,
    usernameMsg,
    setUsernameMsg,
    openTarefas,
    openCalculadora,
    openIMC,
    openFrases,
    handleLogout,
    openChangePassword,
    handleChangePassword,
    openChangeUsername,
    handleChangeUsername,
  } = useHomeScreen({ route, navigation });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#111',
      headerTitleStyle: { color: '#111' },
      headerRight: () => (
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.headerTouchable}>
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>{user && user.length ? user[0].toUpperCase() : '👤'}</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, setMenuVisible, user]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => setAboutVisible(true)}>
          <Text style={styles.navItemText}>Sobre a Aplicação</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcome}>Olá, {user}!</Text>

      <HomeActionCards
        onOpenIMC={openIMC}
        onOpenFrases={openFrases}
        onOpenTarefas={openTarefas}
        onOpenCalculadora={openCalculadora}
      />

      <MenuModal
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onOpenChangeUsername={openChangeUsername}
        onOpenChangePassword={openChangePassword}
        onLogout={handleLogout}
      />

      <AboutModal visible={aboutVisible} onClose={() => setAboutVisible(false)} />

      <PasswordModal
        visible={pwdModalVisible}
        onClose={() => setPwdModalVisible(false)}
        user={user}
        currentPwd={currentPwd}
        setCurrentPwd={setCurrentPwd}
        newPwd={newPwd}
        setNewPwd={setNewPwd}
        confirmPwd={confirmPwd}
        setConfirmPwd={setConfirmPwd}
        msg={msg}
        setMsg={setMsg}
        handleChangePassword={handleChangePassword}
      />

      <UsernameModal
        visible={usernameModalVisible}
        onClose={() => setUsernameModalVisible(false)}
        user={user}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        usernamePwd={usernamePwd}
        setUsernamePwd={setUsernamePwd}
        usernameMsg={usernameMsg}
        setUsernameMsg={setUsernameMsg}
        handleChangeUsername={handleChangeUsername}
      />
    </View>
  );
}
