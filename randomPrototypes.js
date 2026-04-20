const listElement = document.getElementById("prototype-list");
const timePerPrototype = document.getElementById("time-div");

let prototypeInfo = [
    {
        name: "Yulia",
        link: "https://forms.cloud.microsoft/r/tMvCRnWhTT"
    },
    {
        name: "Calvin",
        link: "https://forms.office.com/r/d3e08b6g68"
    },
    {
        name: "Duy",
        link: "https://forms.office.com/r/gsZviMcGRm"
    },
    {
        name: "Jinge",
        link: "https://forms.office.com/r/Gf8VhzDAi0?origin=lprLink"
    },
    {
        name: "Hao",
        link: "https://forms.office.com/r/aLuuq1AEQh"
    },
    {
        name: "Spike",
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=cTYy0b7NF0S01L2yS1Exay4EYF3orupFiNEhg3qV4C1URFg3SVlZSlhONU9GUFlZVUlSWlBZWTlGWi4u"
    },
    {
        name: "Nora",
        link: "https://forms.cloud.microsoft/r/KRBYuRaPmd"
    },
    {
        name: "Fatta",
        link: "https://forms.office.com/r/iJ5akn6X93"
    },
    {
        name: "Iris",
        link: "https://forms.office.com/r/7JQgnVyDDe"
    },
];

let shuffledArray = shuffleArray(prototypeInfo);

timePerPrototype.textContent = 150 / shuffledArray.length;

shuffledArray.forEach((prototype, index) => {
   const newListItem = document.createElement("li");
   const newLink = document.createElement("a");
   newLink.textContent = `${prototype.name}'s Peer User Testing form`;
   newLink.href = prototype.link;
   newLink.target = "_blank";
   newListItem.appendChild(newLink);
   listElement.appendChild(newListItem);
});

// fisher-yates shuffle
// from https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}