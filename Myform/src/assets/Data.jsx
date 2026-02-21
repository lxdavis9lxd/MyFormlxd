const nbaTeams = [
  { name: "Milwaukee Bucks", city: "Milwaukee", conference: "Eastern" },
  { name: "Boston Celtics", city: "Boston", conference: "Eastern" },
  { name: "New York Knicks", city: "New York", conference: "Eastern" },
  { name: "Miami Heat", city: "Miami", conference: "Eastern" },
  { name: "Philadelphia 76ers", city: "Philadelphia", conference: "Eastern" },
  { name: "Los Angeles Lakers", city: "Los Angeles", conference: "Western" },
  { name: "Golden State Warriors", city: "San Francisco", conference: "Western" },
  { name: "Denver Nuggets", city: "Denver", conference: "Western" },
  { name: "Phoenix Suns", city: "Phoenix", conference: "Western" },
  { name: "Dallas Mavericks", city: "Dallas", conference: "Western" }
];

const nbaTeamMembers = [
  {
    name: "Milwaukee Bucks",
    city: "Milwaukee",
    conference: "Eastern",
    starters: [
      { position: "PG", name: "Damian Lillard" },
      { position: "SG", name: "Andre Jackson Jr." },
      { position: "SF", name: "Khris Middleton" },
      { position: "PF", name: "Giannis Antetokounmpo" },
      { position: "C", name: "Brook Lopez" }
    ]
  },
  {
    name: "Boston Celtics",
    city: "Boston",
    conference: "Eastern",
    starters: [
      { position: "PG", name: "Jrue Holiday" },
      { position: "SG", name: "Derrick White" },
      { position: "SF", name: "Jaylen Brown" },
      { position: "PF", name: "Jayson Tatum" },
      { position: "C", name: "Kristaps Porziņģis" }
    ]
  },
  {
    name: "New York Knicks",
    city: "New York",
    conference: "Eastern",
    starters: [
      { position: "PG", name: "Jalen Brunson" },
      { position: "SG", name: "Josh Hart" },
      { position: "SF", name: "OG Anunoby" },
      { position: "PF", name: "Julius Randle" },
      { position: "C", name: "Mitchell Robinson" }
    ]
  },
  {
    name: "Miami Heat",
    city: "Miami",
    conference: "Eastern",
    starters: [
      { position: "PG", name: "Terry Rozier" },
      { position: "SG", name: "Tyler Herro" },
      { position: "SF", name: "Jimmy Butler" },
      { position: "PF", name: "Kevin Love" },
      { position: "C", name: "Bam Adebayo" }
    ]
  },
  {
    name: "Philadelphia 76ers",
    city: "Philadelphia",
    conference: "Eastern",
    starters: [
      { position: "PG", name: "Tyrese Maxey" },
      { position: "SG", name: "Kelly Oubre Jr." },
      { position: "SF", name: "Paul George" },
      { position: "PF", name: "Caleb Martin" },
      { position: "C", name: "Joel Embiid" }
    ]
  },
  {
    name: "Los Angeles Lakers",
    city: "Los Angeles",
    conference: "Western",
    starters: [
      { position: "PG", name: "D'Angelo Russell" },
      { position: "SG", name: "Austin Reaves" },
      { position: "SF", name: "LeBron James" },
      { position: "PF", name: "Rui Hachimura" },
      { position: "C", name: "Anthony Davis" }
    ]
  },
  {
    name: "Golden State Warriors",
    city: "San Francisco",
    conference: "Western",
    starters: [
      { position: "PG", name: "Stephen Curry" },
      { position: "SG", name: "Brandin Podziemski" },
      { position: "SF", name: "Andrew Wiggins" },
      { position: "PF", name: "Draymond Green" },
      { position: "C", name: "Trayce Jackson-Davis" }
    ]
  },
  {
    name: "Denver Nuggets",
    city: "Denver",
    conference: "Western",
    starters: [
      { position: "PG", name: "Jamal Murray" },
      { position: "SG", name: "Christian Braun" },
      { position: "SF", name: "Michael Porter Jr." },
      { position: "PF", name: "Aaron Gordon" },
      { position: "C", name: "Nikola Jokić" }
    ]
  },
  {
    name: "Phoenix Suns",
    city: "Phoenix",
    conference: "Western",
    starters: [
      { position: "PG", name: "Bradley Beal" },
      { position: "SG", name: "Devin Booker" },
      { position: "SF", name: "Kevin Durant" },
      { position: "PF", name: "Royce O'Neale" },
      { position: "C", name: "Jusuf Nurkić" }
    ]
  },
  {
    name: "Dallas Mavericks",
    city: "Dallas",
    conference: "Western",
    starters: [
      { position: "PG", name: "Luka Dončić" },
      { position: "SG", name: "Kyrie Irving" },
      { position: "SF", name: "Klay Thompson" },
      { position: "PF", name: "P.J. Washington" },
      { position: "C", name: "Dereck Lively II" }
    ]
  }
];


export default { nbaTeams, nbaTeamMembers };