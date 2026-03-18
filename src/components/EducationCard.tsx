import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type EducationCardProps = {
  period: string;
  title: string;
  subtitle: string;
};

export default function EducationCard({
  period,
  title,
  subtitle,
}: EducationCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
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