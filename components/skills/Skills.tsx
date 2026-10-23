"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import SkillModal from "./SkillModal";
import TechnologyCard from "./TechnologyCard";
import { skills, Skill } from "./SkillData";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <SectionTitle
        subtitle="TECHNOLOGY STACK"
        title="Enterprise Security Technologies"
      />

      <p className="text-zinc-400 max-w-3xl mb-14 leading-8">
        These are the primary technologies I have used while designing,
        deploying and operating enterprise security infrastructure,
        SOC environments, automation and security operations.
        Click on any technology to explore my hands-on experience.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {skills.map((skill) => (

          <TechnologyCard
            key={skill.id}
            skill={skill}
            onClick={() => setSelectedSkill(skill)}
          />

        ))}

      </div>

      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
      />

    </section>
  );
}