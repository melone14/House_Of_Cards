// SEED DB
import Character from "./models/Character.js";
const data = [
  {
    name: "Claire Underwood",
    actor_name: "Robin Wright",
    img:
      "https://bi.im-g.pl/im/06/fb/16/z24097030V,Robin-Wright-na-plakacie-6--serii--House-of-Cards-.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Robin+Wright-5216",
    seasons: "I - VI",
  },
  {
    name: "Doug Stamper",
    actor_name: "Michael Kelly",
    img: "https://api.time.com/wp-content/uploads/2016/02/hoc_401_00447r.jpeg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Michael+Kelly-81225",
    seasons: "I - VI",
  },
  {
    name: "Francis Underwood",
    actor_name: "Kevin Spacey",
    img:
      "https://ocdn.eu/pulscms-transforms/1/tNRk9kpTURBXy9mZTNjZmU0Y2IzZjlhZTAyNmJmMDMzOWExZDhlMDAzYy5qcGeSlQMjAM0Dus0CGZMFzQFjzQGQgqEwAaExAA",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Kevin+Spacey-105",
    seasons: "I - V",
  },
  {
    name: "Seth Grayson",
    actor_name: "Derek Cecil",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/d/da/Seth_Grayson_2.jpg/revision/latest/scale-to-width-down/340?cb=20180306161613",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Derek+Cecil-271832",
    seasons: "II - VI",
  },
  {
    name: "Catherine Durant",
    actor_name: "Jayne Atkinson",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/4/4b/Cathy504.png/revision/latest?cb=20170728001522",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Jayne+Atkinson-46554",
    seasons: "I - VI",
  },
  {
    name: "Edward Meechum",
    actor_name: "Nathan Darrow",
    img:
      "https://www.etonline.com/sites/default/files/styles/970xh/public/images/2016-03/640_meechum_hoc4_netflix.jpg?itok=JcCZPJCY",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Nathan+Darrow-1566112",
    seasons: "I - IV",
  },
  {
    name: "Remy Danton",
    actor_name: "Mahershala Ali",
    img: "https://s1.r29static.com/bin/entry/b6b/x/1797299/image.png",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Mahershala+Ali-190191",
    seasons: "I - IV",
  },
];

export const seedDB = () => {
  //Remove all characters
  Character.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("removed characters");
    //add all characters
    data.forEach((seed) => {
      Character.create(seed, (err, character) => {
        if (err) {
          console.log(err);
        } else {
          console.log("added a ccharacter");
        }
      });
    });
  });
};
