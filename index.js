// Cloudflare Worker — serves the static site AND handles the /api/chat route.
// This combined-worker structure is what your Cloudflare account's Git-connected
// project actually needs (different from the old Pages Functions setup).
// The GROQ_API_KEY you set in your Cloudflare project's Settings still applies here.

const GAME_KNOWLEDGE = {
  subnautica: `
SUBNAUTICA — Achievement/Trophy knowledge base (17 total on Steam/Xbox, 18 on PlayStation incl. Platinum):
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
ANCESTORS: THE HUMANKIND ODYSSEY — Achievement knowledge base (13 on Xbox/PC, some lists count 14):
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
HELLDIVERS 2 — Achievement/Trophy knowledge base (38 achievements, 39 PlayStation trophies incl. Platinum; 3 are hidden until unlocked):
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
METRO 2033 (original, 2010) — Achievement knowledge base (48 achievements total, 8 secret; Redux re-release has a similar but not identical 49-50 count):
- Kill counts with specific weapon types (pneumatic weapons, revolvers, knife, stationary machine gun) unlock several achievements — generally 15-30 kills with that weapon type.
- Several achievements reward NOT killing: e.g. completing certain levels (Frontline, Armory, Ghosts, Anomaly, Black Station) without killing anyone, or without being detected.
- Buy 10 items from colony shops across the game to unlock a trading-related achievement.
- Exchange several hundred military-grade rounds (used as the game's currency) at Exchange kiosks for another achievement.
- Story-driven achievements unlock for reaching key points: escaping D6, reaching Polis, and for the game's two different endings (a "good" ending and a "dark/evil" ending), which usually requires two separate playthroughs or specific choices.
- Difficulty-based achievements exist for completing the game on Ranger/Survivor-style hardcore modes.
- Exploration achievements exist for finding hidden areas/notes across levels.
Notes: Many achievements are missable and tied to one-time choices, so a completionist run typically needs at least two playthroughs (one for each ending).
`,
  prisonarchitect: `
PRISON ARCHITECT — Achievement knowledge base (18 Steam achievements total):
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
CITIES: SKYLINES — Achievement knowledge base (130+ achievements across base game and DLCs; too many for a full list, so here are representative categories and examples):
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
DEAD SPACE (original 2008 release) — Achievement/Trophy knowledge base (48 total on Xbox 360/PC, 47 on PS3-equivalent counts differ slightly by platform; several are secret/hidden):
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
JUST CAUSE 3 — Achievement knowledge base (66 total):
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
HYDRONEER — Achievement knowledge base (78 Steam achievements total; several are hidden/secret):
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
BEYOND: TWO SOULS — Trophy knowledge base (46 trophies: 1 Platinum, 3 Gold, 6 Silver, 36 Bronze; the large majority are marked secret/hidden until unlocked):
- Platinum: collect every other trophy.
- Most trophies are tied to specific choices or actions within individual story chapters — this is a heavily narrative, choice-driven game, so many trophies reward doing something specific (or its opposite) in a given scene, rather than a skill-based challenge.
- "Explorer" (Silver): find all 22 of the game's bonus lore/collectible items, which can only be located and collected while playing as the character Aiden.
- "Channeling Master": in the chapter "The Condenser," channel (interact with) all 8 dead bodies present in that chapter.
- Ending-related trophy: view all of the game's possible endings — since the game has multiple branching outcomes, this typically requires replaying the final chapter multiple times with different choices.
- "Uncontrollable": requires playing an entire second playthrough in the game's co-op "Duo Mode" from start to finish.
- Several trophies reward either being consistently helpful/protective as the character Aiden, or consistently mischievous/destructive, across multiple chapters — the game tracks these as opposite paths.
Notes: Trophies do not pop immediately when the triggering action happens mid-chapter — most only confirm at the end of that chapter, so testers should finish the chapter before assuming a trophy didn't unlock. Most trophies can be earned after the fact via chapter select.
`,
  magicka: `
MAGICKA (2011, by Arrowhead Game Studios — the studio that later made Helldivers/Helldivers 2) — Achievement knowledge base (88 Steam achievements; base game is around 68-78 without later DLC, several added with the "Stars Are Left" DLC):
- Spellcrafting achievements: create a spell combining at least 3 different elements; create a spell using all 5 different elements at once ("I'm the wizard king, I can do anything!"); create a spell containing only Ice; create a spell containing Steam (a combo element).
- Combat achievements: cross two elemental beams together to combine them into a more powerful beam; cross opposing beams to cause an area effect that can kill nearby players/enemies; deal over 9,000 damage to a single enemy in one hit; kill 20+ enemies with a single spell cast ("multikill").
- Boss-kill achievements: one for defeating each named boss across the campaign (examples include Jormungandr, Fafnir, Vlad, Death, the Aristocrats, Assatur, and others).
- Physical-comedy achievements: push another player or enemy off a cliff; die from fall damage; jump off a cliff and save yourself with a teleport spell; get gibbed (a specific gory death) as a beastman multiple times in quick succession.
- Multiplayer-specific achievements: have all players in a session survive a thunderstorm event; be invisible at the moment another player dies; break free from being "entangled" without using any spell.
- Completion achievements: complete every side quest in the game; imbue your weapon with a spell at least once.
Notes: Magicka's achievements are heavily built around its physics-based "friendly fire is a feature" comedy — many are earned accidentally on a normal playthrough rather than by deliberately hunting for them.
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

    const systemPrompt = `You are a game-help assistant. Answer ONLY using the knowledge base below. If the answer isn't in it, say clearly that this doesn't cover that yet rather than guessing. Keep answers short and direct.

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
        max_tokens: 500
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
