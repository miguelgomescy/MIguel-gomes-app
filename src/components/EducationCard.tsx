import { useEffect, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type Props = {
  period: string;
  title: string;
  subtitle: string;
  bullets: string[];
  isOpen: boolean;
  onPress: () => void;
};

export default function EducationCard({
  period,
  title,
  subtitle,
  bullets,
  isOpen,
  onPress,
}: Props) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isOpen, animation]);

  const estimatedBulletHeight = 56;

  const heightInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bullets.length * estimatedBulletHeight],
  });

  const opacityInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Pressable
      style={[styles.card, isOpen && styles.cardOpen]}
      onPress={onPress}
    >
      <Text style={[styles.period, isOpen && styles.textOpen]}>
        {period}
      </Text>

      <Text style={[styles.title, isOpen && styles.textOpen]}>
        {title}
      </Text>

      <Text style={[styles.subtitle, isOpen && styles.textOpen]}>
        {subtitle}
      </Text>

      <Animated.View
        style={{
          height: heightInterpolation,
          opacity: opacityInterpolation,
          overflow: 'hidden',
        }}
      >
        <View style={styles.bulletsContainer}>
          {bullets.map((item, index) => (
            <Text key={index} style={styles.bulletText}>
              • {item}
            </Text>
          ))}
        </View>
      </Animated.View>
    </Pressable>
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
  cardOpen: {
    backgroundColor: colors.black,
    borderColor: colors.black,
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
  textOpen: {
    color: colors.white,
  },
  bulletsContainer: {
    marginTop: spacing.sm,
    gap: spacing.sm,
    paddingBottom: spacing.xs,
  },
  bulletText: {
    color: '#EAEAEA',
    fontSize: typography.small,
    lineHeight: 20,
  },
});