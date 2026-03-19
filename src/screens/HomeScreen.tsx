import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
  const [openExperienceId, setOpenExperienceId] = useState<string | null>(null);

  function handleToggleExperience(id: string) {
    setOpenExperienceId((prev) => (prev === id ? null : id));
  }


  // controla qual item de educação está aberto
  const [openEducationId, setOpenEducationId] = useState<string | null>(null);

  // função de toggle (abre/fecha)
  function handleToggleEducation(id: string) {
    setOpenEducationId((prev) => (prev === id ? null : id));
  }

  const [openSkillId, setOpenSkillId] = useState<string | null>(null);

    function handleToggleSkill(id: string) {
       setOpenSkillId((prev) => (prev === id ? null : id));
    }

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <HeaderProfile name={profile.name} role={profile.role} />

      <View style={styles.marqueePlaceholder}>
        <Text style={styles.marqueeText}>Tech & Business</Text>
      </View>

      <SectionTitle title="Minhas Redes" />
      <SocialLinks items={socialLinks} />

      <SectionTitle title="Conheça meus Projetos" />
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          imageResizeMode={project.imageResizeMode}
          projectUrl={project.projectUrl}
          codeUrl={project.codeUrl}
        />
      ))}

      <SectionTitle title="Experiência Profissional" />
      {experiences.map((item) => (
        <ExperienceCard
          key={item.id}
          period={item.period}
          company={item.company}
          role={item.role}
          bullets={item.bullets}
          isOpen={openExperienceId === item.id}
          onPress={() => handleToggleExperience(item.id)}
        />
      ))}

      <SectionTitle title="Formação Acadêmica" />
      {education.map((item) => (
        <EducationCard
          key={item.id}
          period={item.period}
          title={item.title}
          subtitle={item.subtitle}
          bullets={item.bullets}
          isOpen={openEducationId === item.id} // controla se está aberto
          onPress={() => handleToggleEducation(item.id)} // toggle ao clicar
        />
      ))}



<SectionTitle title="Skills" />

<SkillsBlock
  title={skills.frontend.title}
  icons={skills.frontend.icons}
  isOpen={openSkillId === skills.frontend.id}
  onPress={() => handleToggleSkill(skills.frontend.id)}
/>

<SkillsBlock
  title={skills.backend.title}
  icons={skills.backend.icons}
  isOpen={openSkillId === skills.backend.id}
  onPress={() => handleToggleSkill(skills.backend.id)}
  dark
/>

<SkillsBlock
  title={skills.tools.title}
  icons={skills.tools.icons}
  isOpen={openSkillId === skills.tools.id}
  onPress={() => handleToggleSkill(skills.tools.id)}
/>

<View style={styles.languagesCard}>
  <Text style={styles.languagesTitle}>Idiomas</Text>

  {skills.languages.map((item) => (
    <View key={item.id} style={styles.languageRow}>
      <Image source={item.flag} style={styles.flag} resizeMode="cover" />
      <Text style={styles.languageText}>
        {item.label} — {item.level}
      </Text>
    </View>
  ))}
</View>
      

      <SectionTitle title="Contato" />
      <ContactSection />

      <FooterBanner />
    </ScrollView>
  );
}


/* Estilização */

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

  languagesCard: {
  backgroundColor: colors.card,
  borderRadius: radius.xl,
  borderWidth: 1,
  borderColor: colors.border,
  padding: spacing.lg,
  gap: spacing.sm,
},

languagesTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: colors.text,
},

languageRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.sm,
},

flag: {
  width: 24,
  height: 24,
  borderRadius: 12,
},

languageText: {
  fontSize: 14,
  color: colors.textMuted,
},

});

