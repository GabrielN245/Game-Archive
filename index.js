// Cloudflare Worker — serves the static site AND handles the /api/chat route.
// This combined-worker structure is what your Cloudflare account's Git-connected
// project actually needs (different from the old Pages Functions setup).
// The GROQ_API_KEY you set in your Cloudflare project's Settings still applies here.

const GAME_KNOWLEDGE = {
  subnautica: `
SUBNAUTICA — Story/premise: You play a survivor of the spaceship Aurora, which is shot down by an unknown energy pulse while passing planet 4546B, an ocean world almost entirely covered in water. After crash-landing in an escape pod, you must survive, explore, and build. Over the course of the game you discover that an ancient alien species (called the Precursors/Architects) built research facilities on the planet roughly 1,000 years earlier to study a deadly pathogen called the Kharaa Bacterium, which had infected the local ecosystem. Your character eventually becomes infected too, and the main story goal becomes finding a cure — discovered through a captive alien creature called the Sea Emperor Leviathan, whose offspring produce an enzyme that cures the infection. The game ends with escaping the planet via a rocket you build.

Achievement/Trophy knowledge base (17 total on Steam/Xbox, 18 on PlayStation incl. Platinum):
- Getting Your Feet Wet: Dive for the very first time (leave your Lifepod).
- Settling in for the Long Haul: Build a Habitat (a Base Hatch/room piece).
- Personal Propulsion: Construct a Seamoth.
- Ordered the Prawn: Build a Prawn Suit.
- 40-Foot Sub for One: Build a Cyclops submarine.
- Extinction Event Avoided: Repair the Aurora's Drive Core — requires a Radiation Suit (2x Fiber Mesh, 2x Lead) and Repair Tool (Silicone Rubber, Cave Sulfur, Titanium); repair all hull breaches in the four reactor generators inside the Aurora.
- Ancient Technologies: Find the Quarantine Enforcement Platform on the Mountain Island — requires a Purple Tablet found on nearby islands.
- Seaside Living with an Ocean View: Find the Degasi habitat on the Floating Island.
- Follow the Degasi: Find the Degasi habitat in the Jellyshroom Cave.
- Seamonsters: Find the Degasi habitat in the Deep Grand Reef.
- "Man's Best Friend": Hatch and release a Cuddlefish egg.
- Follow the Lost River: Find the Disease Research Facility in the Lost River.
- Thermal Activity: Find the Thermal Plant.
- Late-game trophies are tied to curing the disease (gathering cure ingredients and injecting yourself) and launching the Neptune Escape Rocket to leave the planet — the game's ending.
- Platinum (PS only): earn every other trophy.
General tips: Achievements are permanently disabled on a save if Console Commands are used (unless you quit without saving) or if you play in Creative mode.
`,
  ancestors: `
ANCESTORS: THE HUMANKIND ODYSSEY — Story/premise: There isn't a traditional plot with named characters and a fixed storyline — the game is built by Panache Digital Games (founded by Patrice Désilets, a co-creator of the first two Assassin's Creed games) around the real scientific concept of human evolution, letting you control a clan of early hominid ancestors in Neogene-period Africa starting roughly 10 million years ago. You directly control clan members, keeping them fed, hydrated, and safe from predators (like sabertooth cats and snakes) while exploring, learning skills, and passing knowledge to the next generation. The "story" is really the clan's own journey: through survival, reproduction, and accumulated discoveries, your lineage gradually evolves — physically and behaviorally — advancing through real evolutionary stages (from early tree-dwelling hominids toward more human-like species) across roughly 8 million years of in-game time, ending whenever the player reaches the final possible evolutionary leap the game allows.

Achievement knowledge base (13 on Xbox/PC, some lists count 14):
- Save the kid: tied to the opening cutscene sequence, where an elder ape carrying a baby is attacked by a Bateleur Eagle; you then gain control of the baby ape.
- Miss Me! Miss Me!: Dodge a Machairodus' (saber-tooth cat) attack twice in one encounter.
- Unlock the ability to walk on two legs (bipedalism) — reached by evolving your lineage's Neuronal/Generational/Evolutionary points enough to unlock the trait in the skill tree.
- Become Omnivorous: Develop your lineage enough (via evolution) to assimilate nutrients from all kinds of food, not just your starting diet.
- Five achievements are tied directly to reaching each Evolutionary Era via the Evolution tab:
  1. Become Orrorin Tugenensis — 7.2-5.5 million years ago
  2. Become Ardipithecus Ramidus — 5.5-3.9 million years ago
  3. Become Australopithecus Afarensis — 3.9-2.5 million years ago
  4. Become Australopithecus Africanus — 2.5-2 million years ago
  5. Launch the last possible evolution — ~2 million years ago (final era)
Tips: Progress happens through Neuronal (learning within one life), Generational (passed to your clan's next generation), and Evolutionary (permanent evolutionary leaps) means.
`,
  helldivers2: `
HELLDIVERS 2 — Story/premise: Set roughly 100 years after the original Helldivers game, in a satirical future where humanity lives under "Super Earth," an authoritarian society styled as a hyper-patriotic "managed democracy." You play a Helldiver, an elite soldier dropped onto hostile planets to defend Super Earth's colonies and interests. The galaxy-spanning war is fought against two main enemy factions: the Terminids (giant insectoid alien creatures) and the Automatons (a robotic army). There isn't a traditional single-player story arc with named characters so much as an ongoing, community-wide "galactic war" — the community's collective mission results (via "Major Orders") shift which planets are contested and what the current threats are, so the narrative is always evolving rather than fixed.

Achievement/Trophy knowledge base (38 achievements, 39 PlayStation trophies incl. Platinum; 3 are hidden until unlocked):
Gold tier:
- Hell Dive: Complete an Extreme difficulty mission (or higher) without any squad member dying.
- Hold my primary, I'm going in!: Complete a full Hard-difficulty-or-higher mission without anyone firing their primary or support weapon.
- Gone in 360 seconds!: Complete a full Extreme difficulty Blitz mission and extract in under six minutes.
Silver tier (examples):
- Extractamundo!: Extract with a full 4-person squad on Hard difficulty or higher.
- Stalking is illegal: Destroy/complete a Stalker Lair/Hive tactical objective on a Terminid planet.
- Caught them by Supplies!: Kill a Charger using a Resupply pod (drop it directly on one).
- Samples are a diver's best friend: Extract with at least 15 rare samples as a team in one mission.
- Doing your part: Complete at least 100 missions total.
- It's the only way to be sure...: Have 6 orbital barrage-type stratagems active in the same area at the same time.
- Spread Managed Democracy: Kill 150 enemies in a single mission.
Bronze tier (examples):
- Strapping young lad: Customize your Helldiver with a new cape, armor, and helmet.
- Hold My Liber-tea!: Equip the Jump Pack backpack stratagem, use it to launch into the air, then collide with an object or fall from height to trigger a ragdoll.
Platinum (PS5 only): The Epitome of Super Earth — obtain every other trophy.
Notes: Three trophies are officially hidden and only reveal their description once unlocked naturally through play.
`,
  metro2033: `
METRO 2033 (original, 2010) — Story/premise: Set 20 years after a nuclear war destroyed the surface world, in the tunnels of the Moscow Metro where survivors have built isolated station-communities. You play Artyom, a young man from Exhibition station, which comes under threat from mysterious creatures called the Dark Ones. A Ranger named Hunter recruits Artyom to travel through the dangerous Metro tunnels to the fortified city of Polis to warn its leaders and seek help. Along the way Artyom passes through stations controlled by rival factions, including Nazi and Communist ("Red Line") groups fighting for control of the Metro. The game has two possible endings depending on player choices throughout: a "bad" ending where the Dark Ones' hive is destroyed via missile strike, or a "good" ending (achieved by making specific peaceful/attentive choices) revealing the Dark Ones were not actually hostile and trying to communicate.

Achievement knowledge base (48 achievements total, 8 secret; Redux re-release has a similar but not identical 49-50 count):
- Kill counts with specific weapon types (pneumatic weapons, revolvers, knife, stationary machine gun) unlock several achievements — generally 15-30 kills with that weapon type.
- Several achievements reward NOT killing: e.g. completing certain levels (Frontline, Armory, Ghosts, Anomaly, Black Station) without killing anyone, or without being detected.
- Buy 10 items from colony shops across the game to unlock a trading-related achievement.
- Exchange several hundred military-grade rounds (used as the game's currency) at Exchange kiosks for another achievement.
- Story-driven achievements unlock for reaching key points: escaping D6, reaching Polis, and for the game's two different endings, which usually requires two separate playthroughs or specific choices.
- Difficulty-based achievements exist for completing the game on Ranger/Survivor-style hardcore modes.
- Exploration achievements exist for finding hidden areas/notes across levels.
Notes: Many achievements are missable and tied to one-time choices, so a completionist run typically needs at least two playthroughs (one for each ending).
`,
  prisonarchitect: `
PRISON ARCHITECT — Story/premise: Prison Architect's campaign ("Prison Stories") is a set of five connected story chapters, mostly told through cutscenes, following the fictional Prison Architect Corps and its CEO Charles Wallace as he oversees various prisons. Chapter 1 ("Death Row") introduces a death row inmate awaiting execution while you build the execution chamber for him. Chapter 2 ("Palermo") involves a powerful mob family, the Palermos, and prison politics tied to organized crime. Chapter 3 ("G.A.B.O.S.") depicts a large-scale riot at Alchemico State Prison led by an inmate named Douglas Benedict, who takes the CEO and staff hostage; you take over as acting warden to retake control. Chapter 4 ("Conviction") follows the aftermath, focusing on treatment of inmates (including Benedict's injured partner Henry Morgan) and introduces prison labor/reform programs. Chapter 5 ("Bootstraps") has you rebuild a demolished prison essentially from scratch, tying together the story's themes of punishment versus rehabilitation. Outside the campaign, the game's main mode is an open-ended sandbox where you design and manage your own prison with no fixed story.

Achievement knowledge base (18 Steam achievements total):
- Throw The Book At Them: Complete the story campaign.
- Crowd Control: Complete all optional objectives in the "Riot" campaign chapter.
- Reformation: Complete all optional objectives in the "Conviction" campaign chapter.
- Freedom: Complete the optional objective in the "Bootstraps" chapter — requires getting your prison's re-offending rate below a target threshold (roughly 25-30%) using minimum-security prisoners and reform programs.
- Stone Walls / Iron Bars / Confined: Build a sandbox-mode prison holding 100 / 500 / 1000 prisoners respectively.
- D.B. Cooper: Sell a prison for over $1,000,000 profit.
- Samuel Norton: Reach a cashflow of $50,000 or more.
- Spare The Rod: Stop a riot involving 50+ prisoners.
- Don't Put Me In The Dark: Carry out an execution on a death row prisoner (requires building an execution wing).
- Wait and Hope: Fully unlock the entire tech/research tree.
- Get Busy Living: Achieve a re-offending rate of 25% or lower through parole/reform.
- It's Not What You Know...: Find and unlock every Polaroid photo collectible.
- ...It's What You Can Prove: Find every page of the in-game "Game Bible" collectible (some pages take in-game time — up to 24 hours — to appear).
- Warden: Load a prison from the Steam Workshop.
- Architect: Publish/share one of your own prisons to the Steam Workshop.
- I May Have Found A Way Out Of Here: Successfully escape from a "decent" security-rated prison while playing in Escape Mode.
Notes: Achievements are disabled for a save if mods are enabled, or after taking a financial bailout from bankruptcy.
`,
  citiesskylines: `
CITIES: SKYLINES — Story/premise: There is no scripted story or characters — this is an open-ended city-building simulation game in the tradition of SimCity. You start with an empty plot of land and build out zoning (residential, commercial, industrial/office), roads, utilities, and public services to grow a city from a small town into a thriving metropolis, managing budget, traffic, pollution, education, and citizen happiness along the way. If asked about "the story," clarify that the game doesn't have one — its content is player-directed city management, not narrative.

Achievement knowledge base (130+ achievements across base game and DLCs; too many for a full list, so here are representative categories and examples):
- Population milestones: achievements for reaching city population thresholds as your city grows.
- Financial achievements: e.g. accumulating large amounts of cash, or earning a set amount through the in-game investment/stock system (put money into investments and hold for a set time without selling).
- Transport achievements: e.g. transporting large numbers of citizens via specific transit types (trolleybuses, passenger helicopters), or building extensive metro/bus networks.
- Specialization achievements: converting all zones of a type (residential/commercial/office) to a specific specialization (e.g. all-organic commercial, all self-sufficient housing).
- Campus DLC achievements: building all campus types, reaching high student counts, or getting a campus to "Prestigious" reputation.
- Airport DLC achievements: building airports of increasing scale and passenger throughput.
- Disaster achievements: several are "passive" — they unlock automatically the first time your city experiences a forest fire, tornado, or hailstorm (natural disasters DLC), no special action needed.
- Monument achievements: constructing specific unique buildings (e.g. the Eden Project, Hadron Collider).
- "Distroy" (district policy) achievement: assign a different policy to each of 10+ districts, with no policy repeated between districts.
Notes: Achievements are disabled if mods are enabled, or after a bankruptcy bailout. Many achievements require specific paid DLCs to unlock at all.
`,
  deadspace: `
DEAD SPACE (original 2008 release) — Story/premise: You play Isaac Clarke, an engineer sent with a small repair crew aboard the USG Ishimura, a massive interstellar mining ship, after it goes silent. Isaac's real motivation is personal — his girlfriend Nicole was serving as the ship's medical officer. Upon arrival, the crew discovers the Ishimura overrun by Necromorphs, grotesque reanimated creatures created when human corpses are reanimated and mutated by an alien artifact called the Marker. Isaac must fight through the ship using mining tools repurposed as weapons (like the Plasma Cutter) and the game's signature "strategic dismemberment" combat, while uncovering what happened to the crew, the cult-like religious movement (Unitology) connected to the Marker, and — through unreliable hallucinations — the truth about Nicole's fate.

Achievement/Trophy knowledge base (48 total on Xbox 360/PC, 47 on PS3-equivalent counts differ slightly by platform; several are secret/hidden):
- Chapter-completion achievements: one for completing each of the game's 12 chapters on any difficulty.
- Weapon-mastery achievements: kill 30 enemies using each individual weapon type (Pulse Rifle, Flamethrower, Ripper, Force Gun, Line Gun, Contact Beam, Plasma Cutter, etc).
- Dismemberment achievements: dismember 50 limbs, then 500 limbs total, from enemies (the game's core "strategic dismemberment" combat mechanic).
- Kinesis/Stasis achievements: rip a dangling limb off using the Kinesis module; use Stasis (the slow-time module) on 50 enemies.
- Stomp achievement: kill 10 enemies using the stomp/foot-crush attack.
- Collection achievement: collect all Trophies (this game's own in-fiction collectible, separate from the PlayStation trophy system) and place 25 items in a Storage container.
- Concordance Officer / Concodrance Officer (PS3 version has this title misspelled): earned automatically as the Platinum trophy once all others are obtained (PS3 only).
Notes: The 2023 Dead Space Remake is a different, separate game with its own trophy list (48 trophies, several new ones replacing 13 from the original) — don't confuse the two when answering.
`,
  justcause3: `
JUST CAUSE 3 — Story/premise: Set six years after Just Cause 2, mercenary Rico Rodriguez returns to Medici, his fictional Mediterranean homeland, which has fallen under the rule of dictator General Sebastiano Di Ravello. Having cut ties with his old employer "The Agency," Rico joins a resistance movement led by his childhood friend Mario Frigo (later reuniting with old ally Dimah al-Masri) to liberate Medici's regions from Di Ravello's forces and his militia, the DRM. As the rebellion pushes back the regime, Rico also helps popular rebel figurehead Rosa Manuela survive and rise as a symbol of Medici's freedom. Di Ravello, meanwhile, pursues a doomsday plan involving Bavarium, a rare explosive/magnetic mineral unique to Medici. The story culminates in Rico confronting Di Ravello directly, ending with the dictator's defeat (killed or dying by his own hand) and Medici's liberation, with Rosa implied to become its new leader.

Achievement knowledge base (66 total):
- Chaos-based achievements: reach 1,000 / 100,000 / 1,000,000 total Chaos (the game's destruction-tracking score).
- Story mission achievements: one for completing each of the game's main story missions (around 9 of the 66 achievements are tied directly to story missions).
- Liberation achievements: liberate 13 settlements; fully liberate an entire province; fully liberate specific named regions (Insula Fonte, Insula Dracon, Insula Striate).
- Challenge achievements: earn at least 3 Gears in a Challenge; earn the max 5 Gears in a Challenge; earn at least 3 Gears in one Challenge of every type; earn 5 Gears in every Challenge (this last one is notoriously difficult due to a bugged challenge called "Laguna Blast").
- Collection achievements: collect every vehicle by bringing it to a Rebel Garage ("Caught 'Em All!"); find every collectible item type across the map (tapes, vintage weapon/vehicle parts, etc).
- Traversal achievements: launch off every Daredevil Jump ramp in the game world; reach the highest point in the map on foot.
- Gear MOD achievements: unlock and activate your first Gear MOD; unlock every Gear MOD in one category; have every Gear MOD type active simultaneously for at least a minute.
- Multiplayer/online achievements (require online connection): beat another player's Challenge score; "Call Out" a friend in a Feat; beat a score you were called out on.
Notes: None of the base-game achievements are missable — bases and settlements can be re-liberated after finishing the story, so nothing is permanently lost by finishing the campaign first.
`,
  hydroneer: `
HYDRONEER — Story/premise: There is no scripted story or characters — this is a sandbox mining and crafting simulation game. You start with a small plot of land and basic tools, and progress by digging up dirt (which contains raw ore), smelting it into metal bars, crafting and selling items, and reinvesting earnings into bigger drills, vehicles, and additional land/dig sites. The game is open-ended, with no main quest — its content is player-directed economic and base-building progression. If asked about "the story," clarify that the game doesn't have one.

Achievement knowledge base (78 Steam achievements total; several are hidden/secret):
- Early/tutorial achievements: turn on a lantern for the first time; sell an item at the jeweller; smelt a bar; cut a gemstone by hand; purchase a new plot of land; complete the tutorial.
- Production-count achievements: produce 1,000 dirt from drills; process 1,000 dirt in harvesters; smelt 100 bars; cut 50 gemstones by hand; compress 100 gems in a logic compressor.
- Economy achievements: purchase 100 items, then 1,000 items, from any store; make 100,000 HydroCoins on the stock market; accumulate 100,000 total HydroCoins.
- Vehicle achievements: purchase each vehicle type (Hydro Truck, Hydro Quad, Hydro Roller, Hydro Mole, Hydro Prospector) from the Bridgepour vehicle store.
- Dig site achievements: purchase each of the game's premium dig sites (Icehelm, Snow Rune Falls, Mildews Aquifer, Dreck Quarry, Scoria Chamber, Cinder Footing, Shattered Breach, Waterside, and others).
- Fishing achievements: get the maximum-level fishing rod (there are 8 rod tiers to unlock); catch 100 fish total.
- Farming achievements: plant 100 crops; grow 1,000 vegetables; create 10 soups; deliver 10 soup/weapon requests; accumulate 10,000 farming or prospector guild tokens.
- Museum/collection achievements: donate bones to an in-game museum (some hidden until the first donation).
Notes: A notable number of achievements are marked hidden and only reveal their description after being unlocked, often tied to small secrets/easter eggs (e.g. an interaction with a truck, throwing a coin in a well).
`,
  beyondtwosouls: `
BEYOND: TWO SOULS — Story/premise: The game follows Jodie Holmes across roughly 15-17 years of her life, from childhood into her early twenties, told out of chronological order. As a young girl, Jodie is discovered to have a psychic bond with an invisible, powerful entity named Aiden, who can move objects, possess people, and interact with the spirit world — sometimes protectively, sometimes violently and beyond her control. Because of this, she's taken in by a government paranormal research agency (the DPA) and raised largely by scientist Nathan Dawkins, who becomes a father figure to her. As she grows, Jodie is trained and eventually used by intelligence/military organizations for missions exploiting her abilities, while also being drawn deeper into questions about the "Infraworld" (the game's afterlife-adjacent spirit realm) and what Aiden actually is. The story explores her attempts to have a normal life and relationships despite her circumstances, and builds toward major events involving a research device called "the Condenser," culminating in a climax tied to a rift between the world of the living and the spirit world, with player choices determining several possible endings for Jodie.

Trophy knowledge base (46 trophies: 1 Platinum, 3 Gold, 6 Silver, 36 Bronze; the large majority are marked secret/hidden until unlocked):
- Platinum: collect every other trophy.
- Most trophies are tied to specific choices or actions within individual story chapters — this is a heavily narrative, choice-driven game, so many trophies reward doing something specific (or its opposite) in a given scene, rather than a skill-based challenge.
- "Explorer" (Silver): find all 22 of the game's bonus lore/collectible items, which can only be located and collected while playing as the character Aiden.
- "Channeling Master": in the chapter "The Condenser," channel (interact with) all 8 dead bodies present in that chapter.
- Ending-related trophy: view all of the game's possible endings — since the game has multiple branching outcomes, this typically requires replaying the final chapter multiple times with different choices.
- "Uncontrollable": requires playing an entire second playthrough in the game's co-op "Duo Mode" from start to finish.
- Several trophies reward either being consistently helpful/protective as the character Aiden, or consistently mischievous/destructive, across multiple chapters — the game tracks these as opposite paths.
Notes: Trophies do not pop immediately when the triggering action happens mid-chapter — most only confirm at the end of that chapter, so testers should finish the chapter before assuming a trophy didn't unlock. Most trophies can be earned after the fact via chapter select.
`,
  metrolastlight: `
METRO: LAST LIGHT — Story/premise: Set about a year after the events of Metro 2033. Artyom, now a Ranger, learns that a Dark One survived the missile strike on their hive from the first game — a child Dark One. Colonel Miller orders Artyom to hunt down and kill it before it can grow into a threat. As Artyom travels through the Metro, he becomes caught between the fascist "Reich" faction and the Communist "Red Line" faction, who are on the brink of open war with each other, while also encountering surface expeditions and mutant threats above ground. Over the course of the game, Artyom's attitude toward the Dark One child shifts from hunter to protector, and the story culminates in a plot involving a bomb meant to destroy the Rangers' D6 headquarters, which Artyom and the Dark One child work together to stop.

Achievement knowledge base (50 achievements in the original release, 49 in the Redux re-release; roughly 40 hours to earn them all):
- The game has two possible endings (good/bad), determined by a hidden "Moral Points" tally earned throughout the game — actions like listening to NPC conversations, sparing enemies, and finding certain hidden details each add a point; a high enough total unlocks the good ending.
- Combat/skill achievements: disarm 10 traps ("Ever Vigilant" — not cumulative across reloads); stealthily kill 15 enemies ("Shadow"); kill 10 enemies using thrown knives; kill 100 humans; kill 100 mutants; set two enemies on fire simultaneously.
- Utility achievements: turn off 40 light sources without breaking them ("Edison"); use 10 lever switches; destroy 50 light sources ("Tesla") — note this is the opposite of "Edison," so they can't both be done in the same careful playthrough easily.
- Collection achievements: find all 43 hidden pages of Artyom's Diary; open 10 safes; play every musical instrument found in the game; purchase 100 items from vendors; collect 1,000 military-grade rounds (the game's currency).
- Completing each individual chapter/level without killing anyone or triggering an alarm unlocks several separate stealth-specific achievements (chapters like Separation, Facility, Revolution, and others each have their own).
Notes: Several achievements are missable within a single playthrough since they depend on one-time choices, so a completionist run often needs at least two playthroughs.
`,
  metroexodus: `
METRO EXODUS — Story/premise: Set about a year after Metro: Last Light. Artyom, now believing there may be survivors beyond Moscow, secretly ventures onto the surface and discovers evidence suggesting other parts of Russia weren't as devastated as the Metro's inhabitants believed. After conflict with the Red Line faction, Artyom, his wife Anna, and a group of fellow Spartan Rangers escape Moscow aboard a modified steam locomotive named the Aurora. The game then follows their journey across a post-apocalyptic Russia — through seasons and regions including a river route, a desert, and forests — searching for a place to start a new life, encountering new factions and mutant threats along the way, while a hidden "moral" system tracks whether Artyom's companions survive based on player choices, determining the story's ending.

Achievement knowledge base (68 achievements/trophies; the Enhanced Edition has an identical list to the original release):
- Story achievements unlock automatically for completing each major chapter/level (Moscow, the Caspian, the Volga, Yamantau, Novosibirsk, the Taiga, and Vladivostok).
- The game has a morality/relationship system: keeping companion characters (Duke, Damir, Alyosha) alive and at full trust by the finale determines which ending you get — a "good" ending requires at least 2 of the 3 to be in good standing.
- Difficulty achievements: complete the game on Ranger Hardcore (the hardest mode, unlocked from the start, with no HUD/aim-assist and scarce resources); complete the entire game with "Iron Mode" enabled (no manual saves) for a separate achievement, regardless of ending.
- Collection achievements: find all 70 hidden diary pages; find all 21 postcards; find a working tune on the radio the first time you use it.
- Combat/utility achievements: install a weapon modification from every mod category onto a single weapon; various one-time story-triggered achievements like detaching every train car during the Moscow level escape.
- Platinum trophy (PS only): earn every other trophy — widely reported as one of the more demanding platinums in the series, since it effectively requires a stealth-focused, relationship-preserving, Ranger Hardcore playthrough.
Notes: The base game and any DLC/Sam's Story-type expansions have separate achievement lists; the ones above cover the base campaign.
`,
  justcause4: `
JUST CAUSE 4 — Story/premise: Shortly after toppling Di Ravello in Medici, Rico Rodriguez is approached by Mira Morales, who convinces him to travel to Solís, a fictional South American nation, to investigate Project Illapa — a weather-control technology her uncle Lanza Morales helped develop, which Rico's late father Miguel also worked on. Solís is ruled by dictator Oscar Espinosa, backed by his private army the Black Hand (commanded by Mira's cousin Gabriela Morales). Rico forms his own rebel group, the "Army of Chaos," and works with an archaeologist named Javi Huerta to uncover Solís's hidden history and the truth about the Espinosa family's rule, while also learning that his father was killed for refusing to let Illapa's weather-control tech be weaponized. As Rico destroys the project's regional weather-core installations, Espinosa reveals he's built a combined "super" weather core to sell to Rico's old employer, The Agency, and the story concludes with a final confrontation as Rico stops Espinosa's plan.

Achievement knowledge base (61 achievements/trophies; roughly 50-60 hours for full completion):
- None of the base-game achievements are missable — settlements and bases can be re-liberated after finishing the story, so nothing is permanently lost by completing the campaign first.
- Story achievements unlock automatically by completing the three main story arcs (control of the tornado, sandstorm, and final assault operations) and their side-character questlines (Sargento, Javi, Garland King).
- Traversal/stunt achievements: complete every "Speed Stunt" film challenge; complete every submarine hoverboard course in under 20 seconds ("Hover or Die"); grapple onto a fast-moving vehicle (like an airliner taking off) to exceed 200 km/h while on the hoverboard ("Skitchin'").
- Exploration achievements: discover 50% of all map locations, then 100% of all map locations; uncover every Ancient Statue collectible.
- Chaos achievements: reach 1,000, then 100,000, then 1,000,000 lifetime Chaos (the game's destruction-tracking score).
- Challenge achievements: earn 3+ Gears in a Challenge; earn the max 5 Gears in one of every Challenge type (this last one is known to be difficult due to a specific buggy challenge called "Laguna Blast").
- Completion achievement: earn every other base-game achievement ("Rico Was Here") — DLC achievements are not required for this one.
`,
  deadspaceremake: `
DEAD SPACE (2023 Remake, by EA Motive) — Story/premise: A ground-up remake that follows the same core story as the original 2008 game — engineer Isaac Clarke arrives aboard the mining ship USG Ishimura, which has gone silent, to search for his girlfriend Nicole and discovers the crew has been slaughtered and transformed into Necromorphs by an alien artifact called the Marker. The remake expands on the original in several ways: Isaac is now fully voiced (he was silent in the original), giving him more personality and dialogue with other characters; a supporting character named Elizabeth Cross has a much larger role than in the original, actively guiding Isaac through parts of the ship rather than only being mentioned; several minor crew members are given more characterization before their deaths; and the remake adds an entirely new secret/alternate ending, accessible only in New Game Plus, that isn't in the original release.

Achievement/Trophy knowledge base (47 achievements on PC, 48 trophies on PlayStation including Platinum; 9-10 are marked hidden/secret until unlocked):
- Story achievements unlock automatically for completing each of the game's 12 chapters on any difficulty ("Welcome Aboard," "Lab Rat," "All Systems Go," and so on through the finale).
- Difficulty achievements: complete the game on Medium difficulty or above for one; complete the game on Impossible mode (only unlocked after beating Hard mode) for a separate, much harder achievement — dying on Impossible demotes the save to Hard, which normally blocks the achievement.
- New Game Plus achievements: several unlock specifically during a NG+ playthrough, including one tied to carrying over all collected items into storage, and one for collecting the game's "One Gun" style challenge run.
- Roughly 13 trophies from the original 2008 game were removed or replaced with new ones specific to the remake's new content (added side-quests and reworked areas).
- Combat achievements: perform a stomp-kill using Isaac's foot-crush attack on enemies; survive a specific late-game "Shooting Gallery" combat encounter aboard the USM Valor.
- Platinum trophy (PS only, named "Concordance Officer"): collect every other trophy.
Notes: This is a separate, distinct achievement/trophy list from the original 2008 Dead Space also in this archive — don't mix the two up when answering.
`,
  subnauticabelowzero: `
SUBNAUTICA: BELOW ZERO — Story/premise: Set on the same planet as the original Subnautica (planet 4546B), this time in a colder region. You play Robin Ayou, who travels to the planet to investigate the mysterious death of her sister Sam, who worked at an Alterra Corporation research outpost studying the planet. While exploring, Robin encounters and eventually bonds with an ancient alien consciousness named Al-An, a being from the same civilization (the Architects/Precursors) that quarantined the planet in the original game's backstory. The story follows Robin uncovering what happened to her sister and to Al-An's people, ending with Robin and Al-An escaping the planet together through a Phasegate device.

Achievement knowledge base (13 achievements total, notably fewer than the original Subnautica's 17; roughly 20-25 hours to unlock them all):
- "Drop in the Ocean": the game's easiest achievement — simply locate and enter your Drop Pod near the start after crash-landing on planet 4546B.
- Vehicle-crafting achievements: construct a Seatruck ("Truckin'"); build the Snowfox Hoverpad and then ride the Snowfox vehicle ("Like Riding a Bike").
- Companion achievement: construct a Spy Pengling drone (its blueprint fragment is found in the Phi Robotics Center in the Glacial Basin area).
- Utility/base-building achievement: scan and then build a Jukebox at a base ("Jukebox Hero").
- Story-progression achievements unlock automatically at key milestones, including one for curing the Frozen Leviathan story thread and one for the game's ending (leaving planet 4546B) — both are easy to earn just by finishing the main story, though missing the Frozen Leviathan story beat before the ending can leave one achievement outstanding.
- As with the original Subnautica, achievements are permanently disabled on a save if Console Commands are used (unless you quit without saving) or if you start in Creative/Freedom/Hardcore custom modes at world creation.
Notes: Unlike the original Subnautica, Below Zero achievements are generally straightforward and tied to natural story/crafting progression rather than deep exploration.
`,
  watchdogs2: `
WATCH DOGS 2 — Story/premise: Set in the San Francisco Bay Area, following the events of the first Watch Dogs. You play Marcus Holloway, a young hacker from Oakland who was wrongly flagged as a criminal suspect by ctOS 2.0, an upgraded citywide surveillance/predictive-policing system. After proving his skill by deleting his own profile from ctOS's servers, Marcus joins DedSec, a hacktivist collective, alongside fellow hackers Sitara, Wrench, Horatio, and Josh. Together they investigate and expose Blume, the tech corporation behind ctOS 2.0, and its CTO Dušan Nemec, who is secretly using the surveillance data to manipulate elections, target activists, and profit from citizens' private information. The tone is notably more lighthearted and satirical than the darker first game, and the story also brings back Raymond "T-Bone" Kenney, a hacker from the original Watch Dogs, as a mentor figure.

Achievement knowledge base (55 achievements; achievements were added to the game years after its original 2016 launch, so older players may need to launch the game once to sync previously-earned Ubisoft Connect progress to Steam):
- None of the achievements are missable — the entire map and all side content remain available to finish after the main story ends.
- Story achievements unlock automatically for completing each named "Operation" in the main campaign (e.g. Operation: False Profits, Operation: Cyber Driver, Operation: Eye for An Eye).
- Fun/novelty achievements: pet a dog 10 times in a park ("Doggyland" — the same dog repeatedly counts); take a "photobomb" selfie of someone else in frame; take a picture of someone vomiting.
- Collection/upgrade achievements: acquire every eKart go-kart upgrade ("Pimp My eKart"); take 25 ScoutX location photos.
- Traversal achievements: perform a 140-meter long jump while driving; chain three jumps in a row while driving; travel 200 meters riding on top of a hacked-open vehicle.
- Multiplayer-specific achievements (require an online connection and other active players): eliminate 5 fugitives in the Bounty Hunter mode; win 4 Showd0wn matches in a row as a full 4-player team; successfully complete an online Co-op Operation.
Notes: Some multiplayer achievements may be harder to earn if the game's online population is low at a given time, since they depend on finding other active players.
`,
  watchdogslegion: `
WATCH DOGS: LEGION — Story/premise: Set in a near-future, post-Brexit London. The story opens with DedSec (the hacktivist group from earlier Watch Dogs games) foiling a bombing plot at the Palace of Westminster, but a mysterious rival group called Zero-Day frames DedSec for a wave of real bombings that kill thousands. Nearly the entire London DedSec cell is wiped out except for one survivor, Sabine Brandt, and the group's AI assistant, Bagley. In the chaos, the British government hands control of London's security to Albion, a private military company run by CEO Nigel Cass, turning the city into a surveillance-heavy police state. Sabine begins rebuilding DedSec using the game's signature mechanic — recruiting ordinary Londoners (in principle, anyone you meet) as playable operatives — to liberate the city's boroughs, investigate Zero-Day, and expose Albion's secret THEMIS project (autonomous drones meant to preemptively execute people for crimes they haven't committed yet). The story also involves the Clan Kelley crime family and a tech company called Broca Tech. A late-game twist reveals that Sabine herself is secretly the leader of Zero-Day, having orchestrated events from within DedSec for her own agenda.

Achievement knowledge base (49 achievements; notably, the game launched in 2020 with NO Steam achievements at all — only Ubisoft Connect ones — and Steam achievement support was added years later, so older players need to launch the game once to sync progress):
- Most achievements unlock naturally just by playing through the main story and side "Operations," making full completion fairly straightforward compared to some open-world games.
- Story achievements are tied to major campaign missions (e.g. completing "Acquisition Target," or the endgame "Operation Westminster").
- Recruitment-focused achievements: the game's signature mechanic lets you recruit any NPC in London as a playable operative with unique skills — several achievements reward recruiting specific character types or using their special abilities.
- Borough-liberation achievements: turn all of London's boroughs into "Defiant" status ("Take Back London") by completing each borough's set of missions — doing this for a single borough unlocks a smaller related achievement first ("Rise Up").
- Collectible achievements: complete a "Paste Up" graffiti spot at all 47 locations across the map ("Piece de Resistance"); play a Darts minigame at all 21 Darts locations in the city ("Bullseye").
- Combat achievement: stun 5 members of the "Clan Kelley" enemy faction using paintball-gun headshots.
Notes: Because achievements were retrofitted onto this game long after launch, some older completion guides online may incorrectly say the game has no achievements at all — that information is outdated.
`
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat" && request.method === "POST") {
      return handleChat(request, env);
    }

    // Everything else: serve the static site files from /public
    return env.ASSETS.fetch(request);
  }
};

async function handleChat(request, env) {
  try {
    const body = await request.json();
    const { gameKey, messages } = body;

    const knowledge = GAME_KNOWLEDGE[gameKey];
    if (!knowledge) {
      return new Response(JSON.stringify({ error: "Unknown game." }), { status: 400 });
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided." }), { status: 400 });
    }

    const systemPrompt = `You are a game-help assistant for this specific game. Answer using ONLY the knowledge base below for any factual claim — this includes achievements/trophies, but also story, plot, characters, and lore. If something specific isn't covered in the knowledge base, say so clearly rather than guessing or improvising, since accuracy is this tool's whole purpose and its whole reason to exist over a generic AI. You may give general commentary in your own words — why a game is fun, tone/genre feel, gameplay tips, encouragement — but never state a specific fact (a name, an event, a mechanic detail) unless it's grounded in the knowledge base below. Use the ongoing conversation to understand follow-up questions in context, and give more detail when asked to elaborate, always still grounded in the knowledge base.

KNOWLEDGE BASE:
${knowledge}`;

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        max_tokens: 1000,
        temperature: 0.85
      })
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      return new Response(JSON.stringify({ error: "AI provider error: " + errText }), { status: 502 });
    }

    const data = await groqResponse.json();
    const reply = data.choices && data.choices[0] && data.choices[0].message
      ? data.choices[0].message.content
      : "No response — try again.";

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error: " + err.message }), { status: 500 });
  }
}
