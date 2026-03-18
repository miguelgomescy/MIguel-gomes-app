import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { radius } from '../theme/radius';
import { typography } from '../theme/typography';
import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { education } from '../data/education';
import { skills } from '../data/skills';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.photoPlaceholder} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.role}>{profile.role}</Text>
      </View>

      <View style={styles.marqueePlaceholder}>
        <Text style={styles.sectionText}>Tech marquee depois</Text>
      </View>

      <Text style={styles.sectionTitle}>Minhas Redes</Text>
      <View style={styles.grid}>
        {socialLinks.map((item) => (
          <View key={item.id} style={styles.socialCard}>
            <Text style={styles.cardText}>{item.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Conheça meus Projetos</Text>
      {projects.map((project) => (
        <View key={project.id} style={styles.projectCard}>
          <View style={styles.projectImage} />
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <View style={styles.projectButtonsRow}>
            <View style={styles.projectButton}>
              <Text style={styles.buttonText}>Ver Projeto</Text>
            </View>
            <View style={styles.projectButton}>
              <Text style={styles.buttonText}>Código</Text>
            </View>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      {experiences.map((item) => (
        <View key={item.id} style={styles.infoCard}>
          <Text style={styles.infoPeriod}>{item.period}</Text>
          <Text style={styles.infoTitle}>{item.company}</Text>
          <Text style={styles.infoSubtitle}>{item.role}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
      {education.map((item) => (
        <View key={item.id} style={styles.infoCard}>
          <Text style={styles.infoPeriod}>{item.period}</Text>
          <Text style={styles.infoTitle}>{item.title}</Text>
          <Text style={styles.infoSubtitle}>{item.subtitle}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Skills</Text>

      <View style={styles.skillBlock}>
        <Text style={styles.skillTitle}>FrontEnd</Text>
        <Text style={styles.skillText}>{skills.frontend.join(' • ')}</Text>
      </View>

      <View style={[styles.skillBlock, styles.skillBlockDark]}>
        <Text style={[styles.skillTitle, styles.skillTitleLight]}>Back End & Banco de Dados</Text>
        <Text style={[styles.skillText, styles.skillTextLight]}>
          {skills.backend.join(' • ')}
        </Text>
      </View>

      <View style={styles.skillBlock}>
        <Text style={styles.skillTitle}>Ferramentas</Text>
        <Text style={styles.skillText}>{skills.tools.join(' • ')}</Text>
      </View>

      <View style={styles.skillBlock}>
        <Text style={styles.skillTitle}>Idiomas</Text>
        <Text style={styles.skillText}>{skills.languages.join(' • ')}</Text>
      </View>

      <Text style={styles.sectionTitle}>Contato</Text>
      <View style={styles.contactCard}>
        <View style={styles.contactImagePlaceholder} />
        <View style={styles.inputPlaceholder}>
          <Text style={styles.placeholderText}>Seu nome</Text>
        </View>
        <View style={styles.inputPlaceholder}>
          <Text style={styles.placeholderText}>Seu email@gmail.com</Text>
        </View>
        <View style={styles.inputPlaceholder}>
          <Text style={styles.placeholderText}>Assunto</Text>
        </View>
        <View style={[styles.inputPlaceholder, styles.messageBox]}>
          <Text style={styles.placeholderText}>Mensagem</Text>
        </View>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Enviar Mensagem</Text>
        </View>
      </View>

      <View style={styles.footerBanner}>
        <Text style={styles.footerBannerText}>Footer técnico depois</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    gap: spacing.lg,
  },
  header: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  photoPlaceholder: {
    width: 140,
    height: 180,
    borderRadius: radius.lg,
    backgroundColor: '#CFCFCF',
  },
  name: {
    fontSize: typography.title,
    fontWeight: '700',
    color: colors.text,
  },
  role: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  marqueePlaceholder: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
  },
  sectionText: {
    color: colors.textMuted,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  socialCard: {
    width: '48%',
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardText: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '600',
  },
  projectCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  projectImage: {
    height: 140,
    borderRadius: radius.lg,
    backgroundColor: '#D8D8D8',
  },
  projectTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
  },
  projectDescription: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  projectButtonsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  projectButton: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.xs,
  },
  infoPeriod: {
    fontSize: typography.small,
    color: colors.textMuted,
  },
  infoTitle: {
    fontSize: typography.body,
    fontWeight: '700',
    color: colors.text,
  },
  infoSubtitle: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  skillBlock: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  skillBlockDark: {
    backgroundColor: colors.purpleDark,
    borderColor: colors.accent,
  },
  skillTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.text,
  },
  skillTitleLight: {
    color: colors.white,
  },
  skillText: {
    fontSize: typography.body,
    color: colors.textMuted,
  },
  skillTextLight: {
    color: '#EAEAEA',
  },
  contactCard: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm,
  },
  contactImagePlaceholder: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: radius.md,
    backgroundColor: '#C8C8C8',
  },
  inputPlaceholder: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  messageBox: {
    minHeight: 120,
    justifyContent: 'flex-start',
    paddingTop: spacing.md,
  },
  placeholderText: {
    color: colors.textMuted,
  },
  submitButton: {
    backgroundColor: colors.black,
    borderRadius: radius.pill,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontWeight: '700',
  },
  footerBanner: {
    height: 180,
    borderRadius: radius.lg,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxl,
    width: '100%',
  },
  footerBannerText: {
    color: colors.text,
    fontWeight: '700',
  },
});