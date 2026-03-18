import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type ExperienceCardProps = {
  period: string;
  company: string;
  role: string;
};

export default function ExperienceCard({
  period,
  company,
  role,
}: ExperienceCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.title}>{company}</Text>
      <Text style={styles.subtitle}>{role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.xs,
  },
  period: {
    fontSize: typography.small,
    color: colors.textMuted,
  },
  title: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
});