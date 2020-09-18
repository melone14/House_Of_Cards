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
    numOfEpisodes: 73,
  },
  {
    name: "Doug Stamper",
    actor_name: "Michael Kelly",
    img: "https://api.time.com/wp-content/uploads/2016/02/hoc_401_00447r.jpeg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Michael+Kelly-81225",
    seasons: "I - VI",
    numOfEpisodes: 72,
  },
  {
    name: "Francis Underwood",
    actor_name: "Kevin Spacey",
    img:
      "https://ocdn.eu/pulscms-transforms/1/tNRk9kpTURBXy9mZTNjZmU0Y2IzZjlhZTAyNmJmMDMzOWExZDhlMDAzYy5qcGeSlQMjAM0Dus0CGZMFzQFjzQGQgqEwAaExAA",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Kevin+Spacey-105",
    seasons: "I - V",
    numOfEpisodes: 65,
  },
  {
    name: "Seth Grayson",
    actor_name: "Derek Cecil",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/d/da/Seth_Grayson_2.jpg/revision/latest/scale-to-width-down/340?cb=20180306161613",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Derek+Cecil-271832",
    seasons: "II - VI",
    numOfEpisodes: 50,
  },
  {
    name: "Catherine Durant",
    actor_name: "Jayne Atkinson",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/4/4b/Cathy504.png/revision/latest?cb=20170728001522",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Jayne+Atkinson-46554",
    seasons: "I - VI",
    numOfEpisodes: 38,
  },
  {
    name: "Edward Meechum",
    actor_name: "Nathan Darrow",
    img:
      "https://www.etonline.com/sites/default/files/styles/970xh/public/images/2016-03/640_meechum_hoc4_netflix.jpg?itok=JcCZPJCY",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Nathan+Darrow-1566112",
    seasons: "I - IV",
    numOfEpisodes: 35,
  },
  {
    name: "Remy Danton",
    actor_name: "Mahershala Ali",
    img: "https://s1.r29static.com/bin/entry/b6b/x/1797299/image.png",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Mahershala+Ali-190191",
    seasons: "I - IV",
    numOfEpisodes: 33,
  },
  {
    name: "Tom Hammerschmidt",
    actor_name: "Boris McGiver",
    img:
      "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_393,w_590/https%3A%2F%2Fnetflixlife.com%2Ffiles%2F2016%2F03%2Fhammerschmidt-590x900.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Boris+McGiver-92139",
    seasons: "I - II, IV - VI",
    numOfEpisodes: 31,
  },
  {
    name: "Thomas Yates",
    actor_name: "Paul Sparks II",
    img:
      "https://media1.popsugar-assets.com/files/thumbor/2H7bjjjtPXBcnfsr4JQ8Kv4FXGA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/14/698/n/1922283/0bdcff65dc172dc1_HOC_411_01657r1.jpeg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Paul+Sparks-525023",
    seasons: "III - VI",
    numOfEpisodes: 28,
  },
  {
    name: "Nathan Green",
    actor_name: "Jeremy Holm",
    img:
      "https://source.colostate.edu/wp-content/uploads/2018/11/JeremyHolmMrRobot-2-e1542147651619.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Jeremy+Holm-1725629",
    seasons: "II - VI",
    numOfEpisodes: 26,
  },
  {
    name: "President Garrett Walker",
    actor_name: "Michel Gill",
    img:
      "https://img4.wikia.nocookie.net/__cb20140207050434/house-of-cards/images/e/e1/Garrett_Walker_2.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Michel+Gill-357227",
    seasons: "I - V",
    numOfEpisodes: 25,
  },
  {
    name: "Jackie Sharp",
    actor_name: "Molly Parker I",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/b/b1/Jackie_Sharp.png/revision/latest/top-crop/width/360/height/450?cb=20140317180853",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Molly+Parker-5572",
    seasons: "II - IV",
    numOfEpisodes: 25,
  },
  {
    name: "Leann Harvey",
    actor_name: "Neve Campbell",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/8/8f/LeAnn_Harvey.jpg/revision/latest/scale-to-width-down/340?cb=20180306161031",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Neve+Campbell-17",
    seasons: "IV - V",
    numOfEpisodes: 25,
  },
  {
    name: "Bob Birch",
    actor_name: "Larry Pine",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/1/18/506418_2.1-1-.jpg/revision/latest/top-crop/width/360/height/450?cb=20170610163730",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Larry+Pine-5749",
    seasons: "I - V",
    numOfEpisodes: 23,
  },
  {
    name: "Heather Dunbar",
    actor_name: "Elizabeth Marvel",
    img: "https://fwcdn.pl/fph/00/36/620036/699303_1.1.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Elizabeth+Marvel-246767",
    seasons: "II - IV",
    numOfEpisodes: 23,
  },
  {
    name: "Claire's assistant",
    actor_name: "Nini Huynh",
    img:
      "https://static.tvmaze.com/uploads/images/medium_portrait/115/287908.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Nini+Huynh-2291569",
    seasons: "III - VI",
    numOfEpisodes: 23,
  },
  {
    name: "Terry Womack",
    actor_name: "Curtiss Cook",
    img:
      "https://i.pinimg.com/originals/32/08/07/3208079ce93a170b92416fee000fd9d6.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Curtiss+Cook-194948",
    seasons: "I - V",
    numOfEpisodes: 19,
  },
  {
    name: "Linda Vasquez",
    actor_name: "Sakina Jaffrey",
    img:
      "https://m.media-amazon.com/images/M/MV5BMTcwMzUzODYxMV5BMl5BanBnXkFtZTcwOTIwMDk5OA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Sakina+Jaffrey-63902",
    seasons: "I - II, VI",
    numOfEpisodes: 19,
  },
  {
    name: "Janine Skorsky",
    actor_name: "Constance Zimmer I",
    img: "https://fwcdn.pl/fph/00/36/620036/506494_1.1.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Constance+Zimmer-71189",
    seasons: "I - II, IV, VI",
    numOfEpisodes: 19,
  },
  {
    name: "Mark Usher",
    actor_name: "Campbell Scott",
    img:
      "https://static.tvmaze.com/uploads/images/medium_portrait/114/286554.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Campbell+Scott-3192",
    seasons: "V - VI",
    numOfEpisodes: 19,
  },
  {
    name: "Congressman Donald Blythe",
    actor_name: "Reed Birney",
    img: "https://fwcdn.pl/fph/00/36/620036/699259.1.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Reed+Birney-3767",
    seasons: "I - V",
    numOfEpisodes: 18,
  },
  {
    name: "Lucas Goodwin",
    actor_name: "Sebastian Arcelus",
    img:
      "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/14704/article_full%403x.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Sebastian+Arcelus-265036",
    seasons: "I - II, IV",
    numOfEpisodes: 17,
  },
  {
    name: "Gavin Orsay",
    actor_name: "Jimmi Simpson",
    img:
      "https://i.pinimg.com/originals/7f/55/53/7f555315ee4166be743f713096e29061.jpg",
    isFemale: false,
    filmweb_link: "",
    seasons: "II - III",
    numOfEpisodes: 17,
  },
  {
    name: "Christina Gallagher",
    actor_name: "Kristen Connolly II",
    img:
      "https://i.pinimg.com/originals/24/a1/1b/24a11b883736209c0c7b698d64d0d6d6.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Kristen+Connolly-902662",
    seasons: "I - II",
    numOfEpisodes: 17,
  },
  {
    name: "Raymond Tusk",
    actor_name: "Gerald McRaney",
    img:
      "https://cdn.cnn.com/cnnnext/dam/assets/150219140512-07-hoc-ps1-220-h-super-169.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Gerald+McRaney-46423",
    seasons: "I - II, IV - V",
    numOfEpisodes: 16,
  },
  {
    name: "Zoe Barnes",
    actor_name: "Kate Mara I",
    img:
      "https://i.pinimg.com/originals/6b/70/0d/6b700d228eaac5d4bac3f3f734e98043.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Kate+Mara-7525",
    seasons: "I - II, IV",
    numOfEpisodes: 15,
  },
  {
    name: "Freddy Hayes",
    actor_name: "Reg E. Cathey",
    img:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2016817/rs_759x1024-160917235258-634.Reg-E.-Cathey-House-of-Cards.kg.091716.jpg?fit=around|759:auto&output-quality=90&crop=759:auto;center,top",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Reg+E.+Cathey-6178",
    seasons: "I - IV",
    numOfEpisodes: 15,
  },
  {
    name: "Will Conway",
    actor_name: "Joel Kinnaman",
    img:
      "https://www.goldderby.com/wp-content/uploads/2016/06/Joel-Kinnaman-House-of-Cards-Season-4.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Joel+Kinnaman-403888",
    seasons: "IV - V",
    numOfEpisodes: 15,
  },
  {
    name: "Hannah Conway",
    actor_name: "Dominique McElligott",
    img:
      "https://i.pinimg.com/originals/8d/4a/64/8d4a64c42bb973404778fe150944216d.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Dominique+McElligott-277834",
    seasons: "IV - V",
    numOfEpisodes: 15,
  },
  {
    name: "Nancy Kaufberger",
    actor_name: "Elizabeth Norment",
    img:
      "https://cdn1.stopklatka.pl/dat/artykul/0000000003/0000003681/original.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Elizabeth+Norment-117880",
    seasons: "I - II",
    numOfEpisodes: 14,
  },
  {
    name: "Viktor Petrov",
    actor_name: "Lars Mikkelsen II",
    img:
      "https://vignette.wikia.nocookie.net/house-of-cards/images/0/02/Viktor_Petrov.jpg/revision/latest/top-crop/width/360/height/450?cb=20151130183133&path-prefix=de",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Lars+Mikkelsen-184721",
    seasons: "III - VI",
    numOfEpisodes: 13,
  },
  {
    name: "Congressman Peter Russo",
    actor_name: "Corey Stoll",
    img:
      "https://static.onecms.io/wp-content/uploads/sites/6/2018/10/corey-stoll-house-of-cards-2000.jpg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Corey+Stoll-160430",
    seasons: "I, IV",
    numOfEpisodes: 12,
  },
  {
    name: "Lisa Williams",
    actor_name: "Kate Lyn Sheil",
    img:
      "https://m.media-amazon.com/images/M/MV5BMmFkYmNhMDQtOWVmZC00NTBlLWIyNzctYTU1MTlkOGFjNzc5XkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Kate+Lyn+Sheil-1197705",
    seasons: "II - III, V",
    numOfEpisodes: 12,
  },
  {
    name: "General Brockhart",
    actor_name: "Colm Feore",
    img:
      "https://postmediamontrealgazette2.files.wordpress.com/2016/10/a-scene-from-mean-dreams-a-canadian-feature-film-about-two3.jpeg",
    isFemale: false,
    filmweb_link: "https://www.filmweb.pl/person/Colm+Feore-7649",
    seasons: "IV - V",
    numOfEpisodes: 12,
  },
  {
    name: "Jane Davis",
    actor_name: "Patricia Clarkson",
    img: "https://s2.r29static.com/bin/entry/404/x,80/2060856/image.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Patricia+Clarkson-5887",
    seasons: "V - VI",
    numOfEpisodes: 11,
  },
  {
    name: "Gillian Cole",
    actor_name: "Sandrine Holt",
    img:
      "https://tvguide1.cbsistatic.com/mediabin/galleries/shows/g_l/hi_hp/house_of_cards/season1/house-of-cards-30.jpg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Sandrine+Holt-46318",
    seasons: "I - II",
    numOfEpisodes: 10,
  },
  {
    name: "Kate Baldwin",
    actor_name: "Kim Dickens I",
    img: "https://imgix.bustle.com/2016/3/4/HOC_408_00449r1.jpeg",
    isFemale: true,
    filmweb_link: "https://www.filmweb.pl/person/Kim+Dickens-3393",
    seasons: "III - V",
    numOfEpisodes: 9,
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
