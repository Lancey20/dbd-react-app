const killers = [
    {
        "name": "Trapper",
        "TLDR": "WATCH THE GROUND! Look for bear traps, especially in loops or on the other side of vaults. If Trapper is putting a trap in a loop, run to a different loop. The less you let him set up, either by forcing chases or a full generator rush, the better. ",
        "strength": "Trapper excels at controlling the map. A good trapper will only let you loop them in the area they want. However, Trapper is a very weak killer overall. ",
        "weakness": "High setup time.",
        "image": "trapper.png"
    },
    {
        "name": "Wraith",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "wraith.png"
    },
    {
        "name": "Hillbilly",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "hillbilly.png"
    },
    {
        "name": "Nurse",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nurse.png"
    },
    {
        "name": "Shape",
        "alias": "Michael Myers",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "shape.png"
    },
    {
        "name": "Hag",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "hag.png"
    },
    {
        "name": "Doctor",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "doctor.png"
    },
    {
        "name": "Huntress",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "huntress.png"
    },
    {
        "name": "Cannibal",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "cannibal.png"
    },
    {
        "name": "Nightmare",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nightmare.png"
    },
    {
        "name": "Pig",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "pig.png"
    },
    {
        "name": "Clown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "clown.png"
    },
    {
        "name": "Spirit",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "spirit.png"
    },
    {
        "name": "Legion",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "legion.png"
    },
    {
        "name": "Plague",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "plague.png"
    },
    {
        "name": "Ghost Face",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "ghostface.png"
    },
    {
        "name": "Demogorgon",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "demogorgon.png"
    },
    {
        "name": "Oni",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "oni.png"
    },
    {
        "name": "Deathslinger",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "deathslinger.png"
    },
    {
        "name": "Executioner",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "executioner.png"
    },
    {
        "name": "Blight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "blight.png"
    },
    {
        "name": "Twins",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "twins.png"
    },
    {
        "name": "Trickster",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "trickster.png"
    },
    {
        "name": "Nemesis",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "nemesis.png"
    },
    {
        "name": "Cenobite",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "cenobite.png"
    },
    {
        "name": "Artist",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "artist.png"
    },
    {
        "name": "Onryo",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "onryo.png"
    },
    {
        "name": "Dredge",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "dredge.png"
    },
    {
        "name": "Mastermind",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "mastermind.png"
    },
    {
        "name": "Knight",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "knight.png"
    },
    {
        "name": "Skull Merchant",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "skullmerchant.png"
    },
    {
        "name": "Singularity",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "singularity.png"
    },
    {
        "name": "Xenomorph",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "xenomorph.png"
    },
    {
        "name": "Good Guy",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "goodguy.png"
    },
    {
        "name": "Unknown",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "unknown.png"
    },
    {
        "name": "Vecna",
        "TLDR": "Can become invisible and move faster.",
        "strength": "Excellent at ambush attacks.",
        "weakness": "Becomes visible near survivors.",
        "image": "vecna.png"
    }
];

export default killers;