import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';

export default function FooterBanner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>Footer técnico depois</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 180,
    borderRadius: radius.lg,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
  },
  text: {
    color: colors.text,
    fontWeight: '700',
  },
});