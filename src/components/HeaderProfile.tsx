import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import { radius } from '../theme/radius';

type HeaderProfileProps = {
  name: string;
  role: string;
};

export default function HeaderProfile({ name, role }: HeaderProfileProps) {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/images/header-c2.png')}
        style={styles.header}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
  },
  header: {
    width: '100%',
    height: 220,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: radius.xl,
  },
  image: {
    borderRadius: radius.xl,
  
  },
  overlay: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
  name: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: '800',
    color: colors.white,
    maxWidth: 150,
  },
  role: {
    marginTop: spacing.xs,
    fontSize: typography.small,
    color: '#F2F2F2',
    fontWeight: '500',
  },
});