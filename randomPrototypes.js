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
    {
        name: "Arianna",
        link: "https://forms.office.com/r/JFCtPMZEuu"
    },
    {
        name: "Sami",
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=cTYy0b7NF0S01L2yS1Exa_nVc6P2xHRIr5Sh9w-zsDZUM1c1RFVKUjA5Uk9JVFoxVFFGTFQxUVZIRi4u"
    },
    {
        name: "Cecile",
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=cTYy0b7NF0S01L2yS1Exaw2H6ASbFNRGp9C9z1vzUeBUQUdWV1lKSFlZWUhaN0ZGOUhDUzUxOEtCTy4u"
    },
    {
        name: "Jannalyn",
        link: "https://forms.office.com/r/TDA3gDb1X9"
    },
    {
        name: "Elaine",
        link: "https://forms.cloud.microsoft/r/Yyp75evXPv"
    },
    {
        name: "Mino",
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=cTYy0b7NF0S01L2yS1Exa5qINZp6o_VHi1BLm68flH1URE1QRU5NVzUxVjBGOUdNR1kySDlaUE44TS4u"
    },
    {
        name: "Vanessa",
        link: "https://forms.office.com/r/wHsiFW9Mit"
    },
    {
        name: "Jamie",
        link: "https://forms.office.com/Pages/ResponsePage.aspx?id=cTYy0b7NF0S01L2yS1Exaz1ZPLDFZmpDngI4vfaaccVUODZIWlFUVTlLUkpJSDRFNVVBWENZVlhUSS4u"
    },
    {
        name: "Strawberry",
        link: "https://forms.office.com/r/WQbEgZDTih"
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