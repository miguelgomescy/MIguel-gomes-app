import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type ProjectCardProps = {
  title: string;
  description: string;
  hasProjectUrl?: boolean;
  hasCodeUrl?: boolean;
};

export default function ProjectCard({
  title,
  description,
  hasProjectUrl,
  hasCodeUrl,
}: ProjectCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonsRow}>
        <View style={[styles.button, !hasProjectUrl && styles.buttonDisabled]}>
          <Text style={styles.buttonText}>
            {hasProjectUrl ? 'Ver Projeto' : 'Em breve'}
          </Text>
        </View>

        <View style={[styles.button, !hasCodeUrl && styles.buttonDisabled]}>
          <Text style={styles.buttonText}>
            {hasCodeUrl ? 'Código' : 'Privado'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  image: {
    height: 140,
    borderRadius: radius.lg,
    backgroundColor: '#D8D8D8',
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
  },
  description: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  button: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#7A7A7A',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
  },
});