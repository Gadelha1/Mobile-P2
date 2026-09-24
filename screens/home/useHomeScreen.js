import { useState } from 'react';
import { alterarSenha, autenticarUsuario, alterarUsuario } from '../../database/banco';

export function useHomeScreen({ route, navigation }) {
    const initialUser = route?.params?.user ?? 'Usuário';

    const [user, setUser] = useState(initialUser);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [pwdModalVisible, setPwdModalVisible] = useState(false);
    const [currentPwd, setCurrentPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [msg, setMsg] = useState('');
    const [usernameModalVisible, setUsernameModalVisible] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [usernamePwd, setUsernamePwd] = useState('');
    const [usernameMsg, setUsernameMsg] = useState('');

    function openTarefas() {
        navigation.navigate('Tarefas');
    }

    function openCalculadora() {
        navigation.navigate('Calculadora');
    }

    function openIMC() {
        navigation.navigate('IMC');
    }

    function openFrases() {
        navigation.navigate('Frases');
    }

    async function handleLogout() {
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }

    function openChangePassword() {
        setMenuVisible(false);
        setPwdModalVisible(true);
        setMsg('');
        setCurrentPwd('');
        setNewPwd('');
        setConfirmPwd('');
    }

    async function handleChangePassword() {
        setMsg('');
        if (!currentPwd || !newPwd) {
            setMsg('Preencha as senhas');
            return;
        }

        if (newPwd !== confirmPwd) {
            setMsg('As senhas não coincidem');
            return;
        }

        try {
            const auth = await autenticarUsuario(user, currentPwd);
            if (!auth) {
                setMsg('Senha atual inválida');
                return;
            }

            const res = await alterarSenha(user, newPwd);
            if (res && res.rowsAffected !== 0) {
                setMsg('Senha alterada com sucesso');
                setTimeout(() => setPwdModalVisible(false), 900);
            } else {
                setMsg('Erro ao alterar senha');
            }
        } catch (err) {
            console.error(err);
            setMsg('Erro ao alterar senha');
        }
    }

    function openChangeUsername() {
        setMenuVisible(false);
        setUsernameModalVisible(true);
        setNewUsername('');
        setUsernamePwd('');
        setUsernameMsg('');
    }

    async function handleChangeUsername() {
        setUsernameMsg('');
        if (!newUsername) {
            setUsernameMsg('Digite o novo usuário');
            return;
        }

        if (!usernamePwd) {
            setUsernameMsg('Digite sua senha atual');
            return;
        }

        try {
            const auth = await autenticarUsuario(user, usernamePwd);
            if (!auth) {
                setUsernameMsg('Senha inválida');
                return;
            }

            const res = await alterarUsuario(user, newUsername.trim());
            if (res && res.rowsAffected !== 0) {
                setUsernameMsg('Nome de usuário alterado');
                setUser(newUsername.trim());
                navigation.setParams({ user: newUsername.trim() });
                setTimeout(() => setUsernameModalVisible(false), 900);
            }
        } catch (err) {
            console.error(err);
            if (err && err.code === 'USER_EXISTS') {
                setUsernameMsg('Usuário já existe');
            } else {
                setUsernameMsg('Erro ao alterar usuário');
            }
        }
    }

    return {
        user,
        setUser,
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
    };
}
