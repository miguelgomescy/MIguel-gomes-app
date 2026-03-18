import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type SkillsBlockProps = {
  title: string;
  content: string;
  dark?: boolean;
};

export default function SkillsBlock({
  title,
  content,
  dark = false,
}: SkillsBlockProps) {
  return (
    <View style={[styles.card, dark && styles.cardDark]}>
      <Text style={[styles.title, dark && styles.titleDark]}>{title}</Text>
      <Text style={[styles.text, dark && styles.textDark]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  cardDark: {
    backgroundColor: colors.purpleDark,
    borderColor: colors.accent,
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
  },
  titleDark: {
    color: colors.white,
  },
  text: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  textDark: {
    color: '#EAEAEA',
  },
});