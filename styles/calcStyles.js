import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safe: { flex: 1 },
    container: { paddingBottom: 32 },

    header: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },
    headerTitle: {
        fontWeight: '800',
        color: '#1a1a2e',
        marginBottom: 8,
    },
    headerControls: { gap: 6 },
    controlRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    controlLabel: { color: '#555', fontWeight: '600' },


    tabBar: { maxHeight: 52, borderBottomWidth: 1, borderColor: '#e0e0e0' },
    tabBarContent: { paddingHorizontal: 8, alignItems: 'center' },
    tab: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginHorizontal: 3,
        borderRadius: 20,
        marginVertical: 6,
    },
    tabText: { color: '#888', fontWeight: '600' },
    tabTextActive: { color: '#fff', fontWeight: '700' },


    resultBox: {
        margin: 14,
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#3a7bd5',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
    },
    resultBoxDark: {
        backgroundColor: '#16213e',
        shadowColor: '#000',
    },
    operationLabel: {
        fontWeight: '700',
        color: '#3a7bd5',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    resultText: { fontWeight: '600', color: '#333' },
    highlight: { color: '#3a7bd5', fontWeight: '800' },


    summaryRow: { marginVertical: 4, borderBottomWidth: 1, borderColor: '#f0f0f0', paddingBottom: 4 },
    summaryLabel: { color: '#888', fontWeight: '600' },
    summaryValue: { color: '#333', fontWeight: '500' },


    padsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 8 },
    numPadContainer: {
        flex: 1,
        margin: 6,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    numPadDark: { backgroundColor: '#16213e' },
    numPadLabel: { color: '#888', fontWeight: '700', marginBottom: 6, textAlign: 'center' },
    display: {
        backgroundColor: '#f5f7ff',
        borderRadius: 10,
        padding: 8,
        marginBottom: 8,
        alignItems: 'flex-end',
        borderWidth: 1,
        borderColor: '#e0e8ff',
        minHeight: 42,
        justifyContent: 'center',
    },
    displayDark: { backgroundColor: '#0f3460', borderColor: '#1a4a7a' },
    displayText: { fontWeight: '700', color: '#1a1a2e' },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    key: {
        width: '31%',
        aspectRatio: 1.3,
        backgroundColor: '#f0f4ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
        elevation: 1,
    },
    keyDark: { backgroundColor: '#0f3460' },
    keyDelete: { backgroundColor: '#fff0f0' },
    keyText: { fontWeight: '700', color: '#1a1a2e' },


    clearBtn: {
        marginHorizontal: 20,
        marginTop: 4,
        backgroundColor: '#3a7bd5',
        borderRadius: 14,
        paddingVertical: 14,
        alignItems: 'center',
        elevation: 3,
    },
    clearBtnDark: { backgroundColor: '#0f3460' },
    clearBtnText: { color: '#fff', fontWeight: '800', letterSpacing: 0.5 },


    textDark: { color: '#e8eaf6' },
    textMutedDark: { color: '#9fa8da' },
});

