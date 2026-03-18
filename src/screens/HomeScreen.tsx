import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderProfile from '../components/HeaderProfile';
import SectionTitle from '../components/SectionTitle';
import SocialLinks from '../components/SocialLinks';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SkillsBlock from '../components/SkillsBlock';
import ContactSection from '../components/ContactSection';
import FooterBanner from '../components/FooterBanner';

import { profile } from '../data/profile';
import { socialLinks } from '../data/socialLinks';
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { education } from '../data/education';
import { skills } from '../data/skills';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { radius } from '../theme/radius';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <HeaderProfile name={profile.name} role={profile.role} />

      <View style={styles.marqueePlaceholder}>
        <Text style={styles.marqueeText}>Tech stripe depois</Text>
      </View>

      <SectionTitle title="Minhas Redes" />
      <SocialLinks items={socialLinks} />

      <SectionTitle title="Conheça meus Projetos" />
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          hasProjectUrl={!!project.projectUrl}
          hasCodeUrl={!!project.codeUrl}
        />
      ))}

      <SectionTitle title="Experiência Profissional" />
      {experiences.map((item) => (
        <ExperienceCard
          key={item.id}
          period={item.period}
          company={item.company}
          role={item.role}
        />
      ))}

      <SectionTitle title="Formação Acadêmica" />
      {education.map((item) => (
        <EducationCard
          key={item.id}
          period={item.period}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}

      <SectionTitle title="Skills" />
      <SkillsBlock title="FrontEnd" content={skills.frontend.join(' • ')} />
      <SkillsBlock
        title="Back End & Banco de Dados"
        content={skills.backend.join(' • ')}
        dark
      />
      <SkillsBlock title="Ferramentas" content={skills.tools.join(' • ')} />
      <SkillsBlock title="Idiomas" content={skills.languages.join(' • ')} />

      <SectionTitle title="Contato" />
      <ContactSection />

      <FooterBanner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    gap: spacing.lg,
  },
  marqueePlaceholder: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
  },
  marqueeText: {
    color: colors.textMuted,
  },
});