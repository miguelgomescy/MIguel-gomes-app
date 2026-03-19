import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { radius } from '../theme/radius';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

type Props = {
  title: string;
  description: string;
  image: any;
  imageResizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  projectUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  imageResizeMode = 'cover',
  projectUrl,
  codeUrl,
}: Props) {
  const handleOpenLink = async (url?: string) => {
    if (!url) return;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode={imageResizeMode} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttonsRow}>
          <Pressable
            style={[styles.button, !projectUrl && styles.buttonDisabled]}
            onPress={() => handleOpenLink(projectUrl)}
            disabled={!projectUrl}
          >
            <Text style={styles.buttonText}>
              {projectUrl ? 'Ver Projeto' : 'Em breve'}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.button, !codeUrl && styles.buttonDisabled]}
            onPress={() => handleOpenLink(codeUrl)}
            disabled={!codeUrl}
          >
            <Text style={styles.buttonText}>
              {codeUrl ? 'Código' : 'Privado'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

/* Estilização */


const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
  },
  content: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.small,
    color: colors.textMuted,
    textAlign: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  button: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#8A8A8A',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 13,
  },
});