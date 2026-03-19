import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type SkillsBlockProps = {
  title: string;
  icons: any[];
  isOpen: boolean;
  onPress: () => void;
  dark?: boolean;
};

export default function SkillsBlock({
  title,
  icons,
  isOpen,
  onPress,
  dark = false,
}: SkillsBlockProps) {
  const visibleIcons = isOpen ? icons : icons.slice(0, 5);

  return (
    <Pressable
      style={[styles.card, dark && styles.cardDark]}
      onPress={onPress}
    >
      <Text style={[styles.title, dark && styles.titleDark]}>{title}</Text>

      <View style={styles.iconsGrid}>
        {visibleIcons.map((icon, index) => (
          <View key={index} style={styles.iconWrapper}>
            <Image source={icon} style={styles.icon} resizeMode="contain" />
          </View>
        ))}
      </View>
    </Pressable>
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
  iconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  iconWrapper: {
    width: '18%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
});