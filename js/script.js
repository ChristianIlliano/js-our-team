const ourTeam = [
    {
        name: "Wayne Barnett",
        profession: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];

for (let i = 0; i < ourTeam.length; i++) {
    const curMember = ourTeam[i]
    console.log("----------------------");
    for (let key in curMember)
    console.log(curMember[key]);

}