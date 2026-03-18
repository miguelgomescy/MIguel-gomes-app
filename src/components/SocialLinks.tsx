import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';

import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type SocialItem = {
  id: string;
  label: string;
  icon: string;
};

type Props = {
  items: SocialItem[];
};

function renderIcon(icon: string) {
  switch (icon) {
    case 'linkedin':
      return <AntDesign name="linkedin-square" size={20} color={colors.text} />;
    case 'instagram':
      return <Feather name="instagram" size={20} color={colors.text} />;
    case 'github':
      return <AntDesign name="github" size={20} color={colors.text} />;
    case 'whatsapp':
      return <FontAwesome name="whatsapp" size={20} color={colors.text} />;
    case 'globe':
      return <Feather name="globe" size={20} color={colors.text} />;
    default:
      return null;
  }
}

export default function SocialLinks({ items }: Props) {
  return (
    <View style={styles.grid}>
      {items.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          {renderIcon(item.icon)}
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  card: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,

    backgroundColor: colors.card,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,

    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: typography.body,
    color: colors.text,
    fontWeight: '600',
  },
});