var iFileName = "ua_20200326_Spells-and-Magic-Tattoos.js";
RequiredSheetVersion(13);
SourceList["UA:SMT"] = {
	name : "Unearthed Arcana: Spells and Magic Tattoos",
	abbreviation : "UA:SMT",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020-SpellsTattoos.pdf",
	date : "2020/03/26"
};
SpellsList["acid stream"] = {
	name : "Acid Stream",
	nameAlt : "Acid Stream",
	nameShort : "Acid Stream",
	regExpSearch : /^(?=.*ac(\.|id))(?=.*(stream)).*$/i,
	source : ["UA:SMT", 2],
	defaultExcluded : false,
	classes : ["sorcerer", "wizard"],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "A bit of rotten food",
	duration : "conc, 1 min",
	save : "Dex",
	description : "30-ft long, 5-ft wide all Dex save or 3d4 acid dmg at start of each turn for duration",
	descriptionMetric : "10-m long 2-m wide all Dex save or 3d4 acid dmg at start of each turn for duration",
	descriptionFull : "A stream of acid emanates from you in a line 30-feet long and 5-feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 3d4 acid damage at the start of each of its turns." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d4 for each slot level above 1st.",
	ritual : false,
	psionic : false,
};

SpellsList["otherworldly form"] = {
	name : "Otherworldly Form",
	nameAlt : "Otherworldly Form",
	nameShort : "Otherworldly Form",
	regExpSearch : /^(?=.*ther(\.|orldly))(?=.*(form)).*$/i,
	source : ["UA:SMT", 2],
	defaultExcluded : false,
	classes : ["cleric","sorcerer","warlock", "wizard"],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "30-ft line",
	components : "V,S,M",
	compMaterial : "an object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration : "conc, 1 min",
	description : "I transform myself using the magic of the Planes to gain several benefits",
	descriptionFull : "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself.  You gain the following benefits until the spell ends:" + "\n   " + "- You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes)." + "\n   " + "- You are immmune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes)." + "\n   " + "- Spectral wings appear on your back, giving you a fly speed of 40-ft." + "\n   " + "- You have a +2 bonus to AC." + "\n   " + "- All your weapon attacks are magical and, when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls." + "\n   " + "- You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.",
	ritual : false,
	psionic : false,
};

SpellsList["summon aberrant spirit"] = {
	name : "Summon Aberrant Spirit",
	nameAlt : "Summon Aberrant Spirit",
	nameShort : "Summon Aberrant Spirit",
	regExpSearch : /^(?=.*ab(\.|ant))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 3],
	defaultExcluded : false,
	classes : ["sorcerer", "warlock", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a pickled tentacle and an eyeball in a crystal vial worth at least 400 gp",
	duration : "conc, 1 hr",
	description : "Summon an Aberrant Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Far Realm or another alien realm of madness. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaadi, or Star Spawn. The creature physically resembles your choice, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s" +                              " level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon bestial spirit"] = {
	name : "Summon Bestial Spirit",
	nameAlt : "Summon Bestial Spirit",
	nameShort : "Summon Bestial Spirit",
	regExpSearch : /^(?=.*es(\.|ial))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 3],
	defaultExcluded : false,
	classes : ["druid", "ranger"],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
	duration : "conc, 1 hr",
	description : "Summon a Bestial Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth the spirit of a beast. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature physically resembles an animal of your choice that is native to the chosen environment, which also determines one of the movement modes in the creature’s stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon celestial spirit"] = {
	name : "Summon Celestial Spirit",
	nameAlt : "Summon Celestial Spirit",
	nameShort : "Summon Celestial Spirit",
	regExpSearch : /^(?=.*est(\.|ial))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 4],
	defaultExcluded : false,
	classes : ["cleric", "paladin"],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a golden reliquary worth at least 500 gp",
	duration : "conc, 1 hr",
	description : "Summon a Celestial Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Upper Planes. The spirit manifests physically in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature’s attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon elemental spirit"] = {
	name : "Summon Elemental Spirit",
	nameAlt : "Summon Elemental Spirit",
	nameShort : "Summon Elemental Spirit",
	regExpSearch : /^(?=.*ele(\.|tal))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 4],
	defaultExcluded : false,
	classes : ["druid", "sorcerer", "wizard"],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "air, a pebble, ash, and water inside a crystal vial worth at least 400 gp",
	duration : "conc, 1 hr",
	description : "Summon an Elemental Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Elemental Planes. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature physically resembles a vaguely humanoid form wreathed in the chosen element, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon fey spirit"] = {
	name : "Summon Fey Spirit",
	nameAlt : "Summon Fey Spirit",
	nameShort : "Summon Fey Spirit",
	regExpSearch : /^(?=.*fe(\.|y))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 5],
	defaultExcluded : false,
	classes : ["bard", "druid", "sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a gilded flower worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon a Fey Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a spirit from the Feywild. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Deceitful, Furious, or Joyful. The creature physically resembles a satyr, a dryad, or an elf (your choice) marked by the chosen mood, which also determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon fiendish spirit"] = {
	name : "Summon Fiendish Spirit",
	nameAlt : "Summon Fiendish Spirit",
	nameShort : "Summon Fiendish Spirit",
	regExpSearch : /^(?=.*fie(\.|ish))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 6],
	defaultExcluded : false,
	classes : ["warlock", "wizard"],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "humanoid blood inside a ruby vial worth at least 600 gp",
	duration : "conc, 1 hr",
	description : "Summon a Fiendish Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a fiendish spirit from the Lower Planes. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature physically resembles a fiend of the chosen type, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon shadow spirit"] = {
	name : "Summon Shadow Spirit",
	nameAlt : "Summon Shadow Spirit",
	nameShort : "Summon Shadow Spirit",
	regExpSearch : /^(?=.*sha(\.|ow))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 7],
	defaultExcluded : false,
	classes : ["sorcerer", "warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "tears inside a crystal vial worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon a Shadow Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a shadowy spirit from the Shadowfell. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature physically resembles a misshapen humanoid marked by the chosen emotion, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};

SpellsList["summon undead spirit"] = {
	name : "Summon Undead Spirit",
	nameAlt : "Summon Undead Spirit",
	nameShort : "Summon Undead Spirit",
	regExpSearch : /^(?=.*un(\.|ead))(?=.*(spirit)).*$/i,
	source : ["UA:SMT", 7],
	defaultExcluded : false,
	classes : ["warlock", "wizard"],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90-ft",
	components : "V,S,M",
	compMaterial : "a gilded humanoid skull worth at least 300 gp",
	duration : "conc, 1 hr",
	description : "Summon an Undead Spirit in a space I can see within range; obey my verbal commands",
	descriptionFull : "You call forth a restless spirit from beyond the grave. The spirit manifests physically in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature’s form: Ghostly, Putrid, or Skeletal. The creature physically resembles a humanoid with the chosen form, which also determines some of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is friendly to you and your companions for the spell’s duration. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys verbal commands that you issue to it (no action required by you). If you don’t issue any, it defends itself but otherwise takes no action." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that" +
			  " casting wherever it uses the spell’s level in its stat block.",
	ritual : false,
	psionic : false,
};