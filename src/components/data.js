const killers = [
    {
        "name": "Trapper",
        "TLDR": "WATCH THE GROUND! Disable all the traps you see. If Trapper places trap while you are looping him, run away to next loop. Take advantage of the high setup time of Trapper.",
        "strength": "Trapper excels at controlling the map. A good trapper will only let you loop them in the area they want. However, Trapper is a very weak killer overall. ",
        "weakness": "High setup time.",
        "image": "trapper.png",
        "alias": ["Trapper"]
    },
    {
        "name": "Wraith",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "wraith.png",
        "alias": ["Wraith"]
    },
    {
        "name": "Hillbilly",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "hillbilly.png",
        "alias": ["Hillbilly", "Leatherface"]
    },
    {
        "name": "Nurse",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nurse.png",
        "alias": ["Nurse"]
    },
    {
        "name": "Shape",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "shape.png",
        "alias": ["Michael Myers", "Halloween"]
    },
    {
        "name": "Hag",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "hag.png",
        "alias": ["Hag"]
    },
    {
        "name": "Doctor",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "doctor.png",
        "alias": ["Doctor", "Shocker"]
    },
    {
        "name": "Huntress",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "huntress.png",
        "alias": ["Huntress", "Axe Thrower"]
    },
    {
        "name": "Cannibal",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "cannibal.png",
        "alias": ["Cannibal", "Bubba"]
    },
    {
        "name": "Nightmare",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nightmare.png",
        "alias": ["Nightmare", "Freddie Krueguer"]
    },
    {
        "name": "Pig",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "pig.png",
        "alias": ["Pig", "Jigsaw"]
    },
    {
        "name": "Clown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "clown.png",
        "alias": ["Clown"]
    },
    {
        "name": "Spirit",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "spirit.png",
        "alias": ["Spirit"]
    },
    {
        "name": "Legion",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "legion.png",
        "alias": ["Legion"]
    },
    {
        "name": "Plague",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "plague.png",
        "alias": ["Plague"]
    },
    {
        "name": "Ghost Face",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "ghostface.png",
        "alias": ["Ghost Face", "Scream"]
    },
    {
        "name": "Demogorgon",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "demogorgon.png",
        "alias": ["Demogorgon", "Dog"]
    },
    {
        "name": "Oni",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "oni.png",
        "alias": ["Oni", "Samurai"]
    },
    {
        "name": "Deathslinger",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "deathslinger.png",
        "alias": ["Deathslinger"]
    },
    {
        "name": "Executioner",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "executioner.png",
        "alias": ["Executioner", "Cone head", "Pyramid head"]
    },
    {
        "name": "Blight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "blight.png",
        "alias": ["Blight", "Speedy", "Flash"]
    },
    {
        "name": "Twins",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "twins.png",
        "alias": ["Twins"]
    },
    {
        "name": "Trickster",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "trickster.png",
        "alias": ["Trickster", "Knife thrower"]
    },
    {
        "name": "Nemesis",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nemesis.png",
        "alias": ["Nemesis", "Zombies"]
    },
    {
        "name": "Cenobite",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "cenobite.png",
        "alias": ["Cenobite", "Pinhead"]
    },
    {
        "name": "Artist",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "artist.png",
        "alias": ["Artist", "Crows"]
    },
    {
        "name": "Onryo",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "onryo.png",
        "alias": ["Onryo", "Tv girl"]
    },
    {
        "name": "Dredge",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "dredge.png",
        "alias": ["Dredge"]
    },
    {
        "name": "Mastermind",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "mastermind.png",
        "alias": ["Mastermind", "Wesker"]
    },
    {
        "name": "Knight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "knight.png",
        "alias": ["Knight"]
    },
    {
        "name": "Skull Merchant",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "skullmerchant.png",
        "alias": ["Skull Merchant"]
    },
    {
        "name": "Singularity",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "singularity.png",
        "alias": ["Singularity"]
    },
    {
        "name": "Xenomorph",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "xenomorph.png",
        "alias": ["Xenomorph", "Alien"]
    },
    {
        "name": "Good Guy",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "goodguy.png",
        "alias": ["Good Guy", "Chucky"]
    },
    {
        "name": "Unknown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "unknown.png",
        "alias": ["Unknown"]
    },
    {
        "name": "Vecna",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "vecna.png",
        "alias": ["Vecna", "Stranger Things", "Dnd"]
    }
];

export default killers;