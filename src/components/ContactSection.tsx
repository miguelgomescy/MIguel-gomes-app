import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';

export default function ContactSection() {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/miguel_icon.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.input}>
        <Text style={styles.placeholder}>Seu nome</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.placeholder}>Seu email@gmail.com</Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.placeholder}>Assunto</Text>
      </View>
      <View style={[styles.input, styles.messageBox]}>
        <Text style={styles.placeholder}>Mensagem</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Enviar Mensagem</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: radius.md,
    backgroundColor: '#C8C8C8',
  },
  input: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  messageBox: {
    minHeight: 120,
    justifyContent: 'flex-start',
    paddingTop: spacing.md,
  },
  placeholder: {
    color: colors.textMuted,
  },
  button: {
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
  },
});