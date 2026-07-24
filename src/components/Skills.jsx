// import React, { useMemo, useState } from 'react';
// import useReveal from '../useReveal.js';
// import { skills } from '../data/content.js';

// const ACCENTS = ['cyan', 'violet', 'amber'];

// function monogram(name) {
//   const words = name.split(/[\s/]+/).filter(Boolean);
//   if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
//   return name.slice(0, 2).toUpperCase();
// }

// export default function Skills() {
//   const titleRef = useReveal();
//   const subRef = useReveal();
//   const gameRef = useReveal();

//   const [activeGroup, setActiveGroup] = useState(0);
//   const [selected, setSelected] = useState(null); // { groupIdx, itemIdx }
//   const [discovered, setDiscovered] = useState(() => new Set());

//   const totalItems = useMemo(
//     () => skills.reduce((sum, g) => sum + g.items.length, 0),
//     []
//   );

//   const group = skills[activeGroup];
//   const accent = ACCENTS[activeGroup % ACCENTS.length];
//   const sel = selected && selected.groupIdx === activeGroup
//     ? group.items[selected.itemIdx]
//     : null;

//   const openSlot = (itemIdx) => {
//     setSelected({ groupIdx: activeGroup, itemIdx });
//     const key = `${activeGroup}-${itemIdx}`;
//     setDiscovered((prev) => {
//       if (prev.has(key)) return prev;
//       const next = new Set(prev);
//       next.add(key);
//       return next;
//     });
//   };

//   const pct = Math.round((discovered.size / totalItems) * 100);
//   const complete = discovered.size === totalItems;

//   return (
//     <section id="skills">
//       <div className="wrap">
//         <div className="eyebrow">Tech Stack Inventory</div>
//         <h2 className="section-title reveal" ref={titleRef}>What I build with.</h2>
//         <p className="section-sub reveal" ref={subRef}>
//           A skill inventory, not a résumé bullet list. Pick a category, open a slot, see where it's actually been used.
//         </p>

//         <div className="skill-game reveal" ref={gameRef}>
//           <div className="sg-hud">
//             <div className="sg-hud-title">SKILL_QUEST.exe <span className="sg-hud-sub">// inventory screen</span></div>
//             <div className="sg-progress">
//               <span className="sg-progress-label">{discovered.size}/{totalItems} DISCOVERED{complete ? ' — COMPLETE' : ''}</span>
//               <div className="sg-progress-track">
//                 <div className="sg-progress-blocks">
//                   {Array.from({ length: totalItems }).map((_, i) => (
//                     <span key={i} className={i < discovered.size ? 'filled' : ''} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="sg-tabs">
//             {skills.map((g, i) => (
//               <button
//                 key={g.group}
//                 className={`sg-tab${i === activeGroup ? ' active' : ''}`}
//                 onClick={() => setActiveGroup(i)}
//               >
//                 {g.group}
//               </button>
//             ))}
//           </div>

//           <div className={`sg-body accent-${accent}`}>
//             <div className="sg-grid">
//               {group.items.map((it, i) => {
//                 const key = `${activeGroup}-${i}`;
//                 const isDiscovered = discovered.has(key);
//                 const isSelected = selected && selected.groupIdx === activeGroup && selected.itemIdx === i;
//                 return (
//                   <button
//                     key={it.name}
//                     className={`sg-slot${isDiscovered ? ' discovered' : ''}${isSelected ? ' selected' : ''}`}
//                     onClick={() => openSlot(i)}
//                     title={it.name}
//                   >
//                     <span className="sg-slot-icon">{monogram(it.name)}</span>
//                     {isDiscovered && <span className="sg-slot-dot" />}
//                   </button>
//                 );
//               })}
//             </div>

//             <div className="sg-detail">
//               {sel ? (
//                 <>
//                   <div className="sg-detail-icon">{monogram(sel.name)}</div>
//                   <div className="sg-detail-body">
//                     <span className="sg-detail-unlock">ITEM UNLOCKED</span>
//                     <h3 className="sg-detail-name">{sel.name}</h3>
//                     <span className="sg-detail-group">{group.group}</span>
//                     <p className="sg-detail-where"><b>USED IN —</b> {sel.where}</p>
//                   </div>
//                 </>
//               ) : (
//                 <div className="sg-detail-empty">
//                   <span className="sg-detail-empty-icon">?</span>
//                   <p>Select an item from the inventory to inspect it.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useMemo, useState } from 'react';
import useReveal from '../useReveal.js';
import { skills } from '../data/content.js';

import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaNetworkWired,
  FaDesktop,
  FaCloud,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from 'react-icons/fa';

const SKILL_ICONS = {
  'C++': FaCode,
  'JavaScript': FaJs,
  'React': FaReact,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'Tailwind CSS': FaCode,
  'Spring Boot': FaCode,
  'Node.js': FaNodeJs,
  'REST API': FaCode,
  'SQL': FaDatabase,
  'MongoDB': FaDatabase,
  'AWS': FaCloud,
  'OOP': FaCode,
  'DSA': FaBrain,
  'Computer Networks': FaNetworkWired,
  'Operating Systems': FaDesktop,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'Postman': FaCode,
  'IntelliJ IDEA': FaCode,
  'VS Code': FaCode,
};

export default function Skills() {
  const titleRef = useReveal();
  const subRef = useReveal();
  const gameRef = useReveal();

  const [selected, setSelected] = useState(null);

  const shuffledSkills = useMemo(() => {
    return [...skills].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">TECH STACK</div>

        <h2 className="section-title reveal" ref={titleRef}>
          What I build with.
        </h2>

        <p className="section-sub reveal" ref={subRef}>
          The tools, technologies, and foundations I use to turn ideas into working software.
        </p>

        <div className="skills-game reveal" ref={gameRef}>
          <div className="skills-header">
            <span>SKILL_INVENTORY.exe</span>
            <span className="skills-status">
              {skills.length} SKILLS LOADED
            </span>
          </div>

          <div className="skills-grid">
  {shuffledSkills.map((skill) => {
    const Icon = SKILL_ICONS[skill.name];

    return (
      <button
        key={skill.name}
        className={`skill-pixel-box ${
          selected === skill.name ? 'selected' : ''
        }`}
        onClick={() => setSelected(skill.name)}
      >
        <span className="skill-icon">
          {Icon && <Icon />}
        </span>

        <span className="skill-name">
          {skill.name}
        </span>

        <span className="skill-scanline" />
      </button>
    );
  })}
</div>

          <div className="pixel-runner runner-one">▰</div>
          <div className="pixel-runner runner-two">◆</div>

          <div className="skills-footer">
            <span>◈ CLICK TO INSPECT</span>
            <span>
              {selected
                ? `SELECTED: ${selected}`
                : 'SYSTEM READY'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}