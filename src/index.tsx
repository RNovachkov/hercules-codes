import {
  definePlugin,
  Focusable,
  PanelSection,
  PanelSectionRow,
  ButtonItem,
  ScrollPanel,
  Field,
  staticClasses,
  Tabs,
} from "@decky/ui";
import { ReactElement, useState } from "react";
import { FaScroll } from "react-icons/fa";
import { GiCrossedSwords, GiSkullCrossedBones, GiSpartanHelmet } from "react-icons/gi";
import archerUrl from "../assets/archer.png";
import centaurUrl from "../assets/centaur.png";
import coinUrl from "../assets/coin.png";
import gladiatorHelmetUrl from "../assets/gladiator_helmet.png";
import herculesUrl from "../assets/hercules.png";
import lightningBoltUrl from "../assets/lightning_bolt.png";
import medusaUrl from "../assets/medusa.png";
import minotaurUrl from "../assets/minotaur.png";
import pegasusUrl from "../assets/pegasus.png";
import serpentUrl from "../assets/serpent.png";
import soldierUrl from "../assets/soldier.png";

const SYMBOL_IMAGES: Record<string, string> = {
  archer: archerUrl,
  centaur: centaurUrl,
  coin: coinUrl,
  gladiator_helmet: gladiatorHelmetUrl,
  hercules: herculesUrl,
  lightning_bolt: lightningBoltUrl,
  medusa: medusaUrl,
  minotaur: minotaurUrl,
  pegasus: pegasusUrl,
  serpent: serpentUrl,
  soldier: soldierUrl,
};

type Difficulty = "BEGINNER" | "MEDIUM" | "HERCULIAN";

const LEVELS_BEGINNER = [
  {
    name: "Your Basic DID",
    symbols: ["coin", "gladiator_helmet", "serpent", "lightning_bolt"],
  },
  {
    name: "The Hero's Gauntlet",
    symbols: ["hercules", "medusa", "pegasus", "pegasus"],
  },
  {
    name: "Centaur's Forest",
    symbols: ["lightning_bolt", "coin", "lightning_bolt", "archer"],
  },
  {
    name: "The Big Olive I",
    symbols: ["archer", "soldier", "soldier", "lightning_bolt"],
  },
  {
    name: "The Big Olive II",
    symbols: ["lightning_bolt", "minotaur", "medusa", "coin"],
  },
  {
    name: "Hydra Canyon",
    symbols: ["pegasus", "coin", "lightning_bolt", "archer"],
  },
  {
    name: "Medusa's Lair",
    symbols: ["centaur", "gladiator_helmet", "soldier", "lightning_bolt"],
  },
  {
    name: "Cyclops Attack",
    symbols: ["pegasus", "centaur", "centaur", "serpent"],
  },
  {
    name: "Titan Flight",
    symbols: ["pegasus", "pegasus", "gladiator_helmet", "coin"],
  },
];

// Unique entries at the TOP so the difference is immediately visible on tab switch
const LEVELS_MEDIUM = [
  {
    name: "Your Basic DID",
    symbols: ["soldier", "minotaur", "soldier", "medusa"],
  },
  {
    name: "The Hero's Gauntlet",
    symbols: ["serpent", "medusa", "coin", "medusa"],
  },
  {
    name: "Centaur's Forest",
    symbols: ["centaur", "hercules", "minotaur", "archer"],
  },
  {
    name: "The Big Olive I",
    symbols: ["centaur", "coin", "serpent", "hercules"],
  },
  {
    name: "The Big Olive II",
    symbols: ["soldier", "serpent", "archer", "soldier"],
  },
  {
    name: "Hydra Canyon",
    symbols: ["coin", "gladiator_helmet", "coin", "soldier"],
  },
  {
    name: "Medusa's Lair",
    symbols: ["archer", "pegasus", "archer", "centaur"],
  },
  {
    name: "Cyclops Attack",
    symbols: ["gladiator_helmet", "pegasus", "hercules", "archer"],
  },
  {
    name: "Titan Flight",
    symbols: ["soldier", "coin", "coin", "lightning_bolt"],
  },
  {
    name: "Passageway of Eternal Torment",
    symbols: ["medusa", "soldier", "centaur", "pegasus"],
  },
  {
    name: "Vortex of Souls",
    symbols: ["soldier", "lightning_bolt", "soldier", "centaur"],
  },
  {
    name: "View FMV",
    symbols: ["pegasus", "soldier", "centaur", "soldier"],
  }
];

const LEVELS_HERCULIAN = [
  {
    name: "Your Basic DID",
    symbols: ["pegasus", "archer", "minotaur", "medusa"],
  },
  {
    name: "The Hero's Gauntlet",
    symbols: ["centaur", "serpent", "gladiator_helmet", "lightning_bolt"],
  },
  {
    name: "Centaur's Forest",
    symbols: ["lightning_bolt", "minotaur", "soldier", "soldier"],
  },
  {
    name: "The Big Olive I",
    symbols: ["minotaur", "medusa", "serpent", "medusa"],
  },
  {
    name: "The Big Olive II",
    symbols: ["archer", "gladiator_helmet", "archer", "coin"],
  },
  {
    name: "Hydra Canyon",
    symbols: ["medusa", "soldier", "pegasus", "coin"],
  },
  {
    name: "Medusa's Lair",
    symbols: ["serpent", "soldier", "pegasus", "centaur"],
  },
  {
    name: "Cyclops Attack",
    symbols: ["gladiator_helmet", "pegasus", "minotaur", "medusa"],
  },
  {
    name: "Titan Flight",
    symbols: ["serpent", "pegasus", "pegasus", "gladiator_helmet"],
  },
  {
    name: "Passageway of Eternal Torment",
    symbols: ["soldier", "hercules", "medusa", "coin"],
  },
  {
    name: "Vortex of Souls",
    symbols: ["coin", "serpent", "minotaur", "soldier"],
  },
  {
    name: "View FMV",
    symbols: ["centaur", "medusa", "gladiator_helmet", "serpent"],
  }
];

function LevelList({ difficulty, levels }: { difficulty: Difficulty, levels: typeof LEVELS_BEGINNER }): ReactElement {
  return (
    <>
    <div style={{ marginLeft: "-8px", marginRight: "-8px" }}>
      <ScrollPanel>
        <PanelSection title={difficulty + " #" + levels.length}>
        {levels.map((level, i) => (
          <PanelSectionRow>
            <Field onClick={()=> {}}>
              <div>
                <p style={{
                  color: "#c9a84c",
                  fontWeight: "bold",
                  letterSpacing: "0.03em",
                }}>{(i + 1).toString() + ". " + level.name}</p>
                <div style={{ display: 'flex', gap:0, alignItems: 'start', flexDirection: 'row', width: '100%', backgroundColor: "rgba(201,168,76,0.08)" }}>
                  {level.symbols.map((sym, j) => (
                    <img
                      key={j}
                      src={SYMBOL_IMAGES[sym]}
                      style={{ width: '25%', height: 'auto' }}
                      alt={sym}
                    />
                  ))}
                </div>
              </div>
            </Field>
          </PanelSectionRow>
        ))}
        </PanelSection>
      </ScrollPanel>
    </div>
    </>
  );
}

function Content(): ReactElement {
  const [difficulty, setDifficulty] = useState<Difficulty>("BEGINNER");

  return (
    <>
    {/* <PanelSection title="🏛️ Hercules Level Codes">
      
    </PanelSection> */}
    <div style={{ height: "95%", width: "300px", position: "fixed", marginTop: "-12px", overflow: "hidden" }}>
      <Tabs
        tabs={[
          { id: "BEGINNER", title: <GiSpartanHelmet /> as any, content: <LevelList difficulty={difficulty} levels={LEVELS_BEGINNER} /> },
          { id: "MEDIUM", title: <GiCrossedSwords /> as any, content: <LevelList difficulty={difficulty} levels={LEVELS_MEDIUM} /> },
          { id: "HERCULIAN", title: <GiSkullCrossedBones /> as any, content: <LevelList difficulty={difficulty} levels={LEVELS_HERCULIAN} /> },
        ]}
        activeTab={difficulty}
        onShowTab={(tab: string) => setDifficulty(tab as Difficulty)}
      />
    </div>
    </>
  );
}

export default definePlugin(() => ({
  name: "Hercules Codes",
  titleView: <div className={staticClasses.Title}>Hercules Codes</div>,
  content: <Content />,
  icon: <FaScroll />,
  onDismount() {},
}));
