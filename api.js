const newsData = [
  {
    source: {
      id: null,
      name: "Lifehacker.com",
    },
    author: "Jeff Somers",
    title: "Is the Crypto Bubble Going to Burst?",
    description:
      "Even if you arent paying attention to Bitcoin and other cryptocurrencies, you might have noticed that their value plummeted last week, with the total value of the market tumbling from a high of $3 trillion last year to about $1.5 trillion in a matter of days…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/976a59b09e0e681e692bd7517498e3f2.jpg",
    publishedAt: "2022-02-09T16:00:00Z",
    content:
      "Even if you arent paying attention to Bitcoin and other cryptocurrencies, you might have noticed that their value plummeted last week, with the total value of the market tumbling from a high of $3 tr… [+4782 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Gian M. Volpicelli",
    title: "As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss",
    description:
      "The central Asian country became No. 2 in the world for Bitcoin mining. But political turmoil and power cuts have hit hard, and the future looks bleak.",
    url: "./img/hamza_coder.jpg",
    urlToImage:
      "https://media.wired.com/photos/61de2d453e654a13e9a16ef0/191:100/w_1280,c_limit/Business_Kazakhstan-2HDE52K.jpg",
    publishedAt: "2022-01-12T12:00:00Z",
    content:
      "When Denis Rusinovich set up cryptocurrency mining company Maveric Group in Kazakhstan in 2017, he thought he had hit the jackpot. Next door to China and Russia, the country had everything a Bitcoin … [+4140 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Mitchell Clark",
    title:
      "The International Monetary Fund tells El Salvador it shouldnt use Bitcoin as legal tender",
    description:
      "The International Monetary Funds executive directors have recommended to El Salvador that it should narrow the scope of its Bitcoin law, making it so that the cryptocurrency is no longer legal tender in the country.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/altkKN7BnaLUpbAVPi6j4xmC2Ug=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13546110/acastro_181126_1777_bitcoin_0001.jpg",
    publishedAt: "2022-01-25T22:11:14Z",
    content:
      "El Salvador introduced Bitcoin as a legal tender alongside the US dollar in 2021. | Illustration by Alex Castro / The Verge\r\n\n \n\n The International Monetary Funds executive board has recommended El … [+2691 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Jon Porter",
    title: "Jack Dorseys Block is working to make Bitcoin mining easier",
    description:
      "Block is working on building an “open Bitcoin mining system,” its CEO Jack Dorsey has announced. The companys goals for the system are for it to be easily available, reliable, and relatively power efficient.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/NE548fVufAlHoBliurOdnG-lfuw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23168502/1321753348.jpg",
    publishedAt: "2022-01-14T13:46:28Z",
    content:
      "Were officially building an open Bitcoin mining system\r\nPhoto by Joe Raedle/Getty Images\r\nBlock, the payment company formerly known as Square, is working on building an open Bitcoin mining system, it… [+2078 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Corin Faife",
    title: "DeepDotWeb operator sentenced to eight years for money laundering",
    description:
      "The operator of DeepDotWeb, a site that indexed dark net marketplaces accessible through Tor browser, was sentenced to eight years after pleading guilty to money laundering using Bitcoin.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/mde_l3lUC4muDPEFG7LYrUz0O3g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8921023/acastro_bitcoin_2.jpg",
    publishedAt: "2022-01-27T18:16:57Z",
    content:
      "Israeli national Tal Prihar pled guilty to routing money from kickbacks through Bitcoin and shell companies \r\nIllustration by Alex Castro / The Verge\r\nIn the culmination of a two-year legal process, … [+1448 chars]",
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Corin Faife",
    title: "Crypto.com admits over $30 million stolen by hackers",
    description:
      "Cryptocurrency exchange Crypto.com has said that $15 million in ethereum and $18 million in bitcoin were stolen by hackers in a security breach",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/mde_l3lUC4muDPEFG7LYrUz0O3g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8921023/acastro_bitcoin_2.jpg",
    publishedAt: "2022-01-20T13:23:31Z",
    content:
      "In a new blog post the company said that 4,836 ETH and 443 bitcoin were taken\r\nIllustration by Alex Castro / The Verge\r\nIn a blog post published in the early hours of Thursday morning, cryptocurrency… [+2004 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Kris Holt",
    title:
      "Netflix is already making a docuseries about the alleged billion-dollar bitcoin launderers",
    description:
      'Netflix\r\n is making a docuseries about one of the worst rappers of all time\r\n. Coincidentally, Heather "Razzlekhan" Morgan and her husband, Ilya Lichtenstein, were charged this week with conspiring to launder 119,754 bitcoin, which was stolen in the 2016 hack…',
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2022-02/74510970-89d5-11ec-bfaf-d4f39cae5191",
    publishedAt: "2022-02-11T19:22:41Z",
    content:
      'Netflix\r\n is making a docuseries about one of the worst rappers of all time\r\n. Coincidentally, Heather "Razzlekhan" Morgan and her husband, Ilya Lichtenstein, were charged this week with conspiring t… [+1432 chars]',
  },
  {
    source: {
      id: null,
      name: "Blogspot.com",
    },
    author: "noreply@blogger.com (Unknown)",
    title: "Bitcoin Extends Slide, Has Fallen More Than 50% From Record High",
    description:
      "Bitcoin, the largest digital asset, extended its decline Saturday, and has now shed more than 50% from its record high in November.Bitcoins decline since hitting the record has wiped out more than $600 billion in market value, and over $1 trillion has been l…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhX63nKoO0bHPlhUmotmBnAoeop0qBhuBYbRRw7FyK-ryX64_wAoLezFw3iJgY4g43RT4MEGA0vlqNqFd2OWXghAxs0XLq7BNMreTsT1sgd3z-WYsXvhzYq5EzDcA-Erbu3FwT119zR-UNF-vISiwbNtqHMRYl7_lWt6evRK1xWIazcvKx40HKJ5SdiAw=w1200-h630-p-k-no-nu",
    publishedAt: "2022-01-22T13:35:00Z",
    content:
      "Bitcoin, the largest digital asset, extended its decline Saturday, and has now shed more than 50% from its record high in November.Bitcoins decline since hitting the record has wiped out more than $… [+567 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Mariella Moon",
    title:
      "Block is officially building an 'open Bitcoin mining system,' says founder Jack Dorsey",
    description:
      "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provider, then known as Square, was considering working on the proj…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-12/b08eca30-67a7-11ec-bfef-a5351ba20ef6",
    publishedAt: "2022-01-14T11:40:33Z",
    content:
      "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provide… [+1584 chars]",
  },
  {
    source: {
      id: null,
      name: "Blogspot.com",
    },
    author: "noreply@blogger.com (Unknown)",
    title: "Musk says Tesla to accept dogecoin for merchandise",
    description:
      "<table><tr><td></td></tr><tr><td> Representation of cryptocurrency Dogecoin is seen in this illustration taken November 29, 2021. REUTERS/Dado Ruvic/Illustration/File Photo</td></tr>\r\n</table>Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogeco…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEiAHi2o-pAdNQNqbU6eVnDtHVY2HvIYdHuBHFQXpjzRRvUkNNNjSD8rJIH_TmYn8--wpME7gw7bhfJ6KoISJSNOJQLfYqr-HZT02wXpVXeg0Ar9yGLKD_ZNbToLt0-vBjvldJdotQOlbaWzlZonZIIINp6eG1v0xyMZdNVTVX4hq23Qkx6XGF9NIurkfw=w1200-h630-p-k-no-nu",
    publishedAt: "2022-01-14T14:14:00Z",
    content:
      'Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogecoin as payment for its products such as the "Giga Texas" belt buckle and mini  electric vehicle models, CEO Elon Musk said on Friday … [+1482 chars]',
  },
  {
    source: {
      id: null,
      name: "New York Times",
    },
    author: "Dana Rubinstein, Jonah E. Bromwich and Jeffery C. Mays",
    title: "Eric Adams Is Taking His First Paycheck in Crypto",
    description:
      "Mr. Adams, who wants New York City to become the global capital for cryptocurrency, will have his paycheck converted into Bitcoin and Ethereum.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://static01.nyt.com/images/2022/01/20/nyregion/20adams-crypto01/20adams-crypto01-facebookJumbo.jpg",
    publishedAt: "2022-01-20T19:54:48Z",
    content:
      "On some level, the new mayor is simply employing an age-old political strategy: making overtures to the business community. Fintech is a growing field in New York City, and blockchain-based companies… [+1562 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Gian M. Volpicelli",
    title: "Gibraltar Could Launch the Worlds First Crypto Stock Exchange",
    description:
      "“The Rock” hopes a new stock exchange will attract crypto millionaires who want to avoid hefty taxes.",
    url: "/img/hamza_coder.jpg",
    publishedAt: "2022-01-26T12:00:00Z",
    content:
      "British entrepreneur and financier Richard ODell Poulden hopes that his new venture will relieve the plight of an underserved cohort: Bitcoin billionaires who want to buy a house.\r\nIn October, Poulde… [+3364 chars]",
  },
  {
    source: {
      id: null,
      name: "Blogspot.com",
    },
    author: "noreply@blogger.com (Unknown)",
    title: "Russian c.bank proposes banning cryptocurrencies, crypto mining",
    description:
      "<table><tr><td></td></tr><tr><td>Representations of virtual cryptocurrencies are seen in this illustration taken November 28, 2021. REUTERS/Dado Ruvic/Illustration/File Photo</td></tr>\r\n</table>Russia's central bank on Thursday proposed banning the use and mi…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEh8Ab2fniYX1LMiTt-SPNcljyB-NxzIH1dlQTxEvcspfJZA-dwAY1rGM3kB4TV9RsJFUZg-x_0n7tfSr8j-WBwrBpsKE543Zdyd75jKXHVcGwSjeuqaueLN4BpkzkxjM3ik7yYdc9yCr_qRRy32QlvV9DtvFZefdtdqiYPTvpZHgVUVFKfbADao2NjVIQ=w1200-h630-p-k-no-nu",
    publishedAt: "2022-01-20T12:56:00Z",
    content:
      "Russia's central bank on Thursday proposed banning the use and mining of cryptocurrencies on Russian territory, citing threats to financial stability, citizens' wellbeing and its monetary policy sove… [+2149 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Times",
    },
    author: "Katie Benner",
    title:
      "Justice Dept. Seizes $3.6 Billion in Bitcoin and Arrests Married Couple",
    description:
      "The couple were accused of conspiring to launder Bitcoin that had been stolen in 2016 from Hong Kong-based Bitfinex, one of the worlds largest virtual currency exchanges.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://static01.nyt.com/images/2022/02/08/us/politics/08dc-justice-1/merlin_199575684_cb549cca-76dd-4ad4-8fe9-a5f54d1024b9-facebookJumbo.jpg",
    publishedAt: "2022-02-08T23:37:54Z",
    content:
      "Over the last five years, about 25,000 of those Bitcoin were transferred out of Mr. Lichtensteins wallet using a complicated series of transactions meant to obscure that the currency had been stolen … [+2506 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "https://www.facebook.com/bbcnews",
    title: "IMF urges El Salvador to remove Bitcoin as legal tender",
    description:
      "Officials say the decision poses risks to financial stability and consumer protection in the country.",
    url: "/img/hamza_coder.jpg",
    publishedAt: "2022-01-26T04:54:14Z",
    content:
      "Image caption, Bitcoin is accepted everywhere for goods and services in El Salvador, alongside the US dollar\r\nThe International Monetary Fund (IMF) has urged El Salvador to reverse its decision to ma… [+1846 chars]",
  },
  {
    source: {
      id: null,
      name: "Blogspot.com",
    },
    author: "noreply@blogger.com (Unknown)",
    title: "Crypto CEO becomes one of the world's richest billionaires",
    description:
      '<table><tr><td></td></tr><tr><td>"Zhao Changpeng has become the world\'s biggest cryptocurrency billionaire(Image: Bloomberg via Getty Images)</td></tr>\r\n</table>A cryptocurrency CEO has become one of the richest people on the planet.Changpeng "CZ" Zhao, who m…',
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://blogger.googleusercontent.com/img/a/AVvXsEj978sCv3gLJg0vBKUzMeJLfis0RTv9EXx5SBp1dBHmTSW5zI946qp2JBTkwo-IFL5ZNv2OQRdVr1Y7qR__vDrWKrS1TUMgRVxmAoHhDXfO4R5FII7PwGwWUvzIjR9wlfuZQIKBl-lprQH3Qmpw1DZQSJED9v3GGMsDJcaxBCkpPDtCBuKi15my8tFvLA=w1200-h630-p-k-no-nu",
    publishedAt: "2022-01-11T12:29:00Z",
    content:
      'A cryptocurrency CEO has become one of the richest people on the planet.Changpeng "CZ" Zhao, who manages the Binance cryptocurrency exchange, has joined the ranks of the world\'s top billionaires, wit… [+3566 chars]',
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Staff",
    title:
      "U.S. SEC rejects Fidelity's Wise Origin spot bitcoin ETF - Reuters.com",
    description:
      "The U.S. Securities and Exchange Commission on Thursday rejected a proposal to offer spot bitcoin exchange-traded funds (ETF) from Fidelity's Wise Origin Bitcoin Trust.",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
    publishedAt: "2022-01-27T15:19:00Z",
    content:
      "By Reuters Staff\r\nJan 26 (Reuters) - The U.S. Securities and Exchange Commission on Thursday rejected a proposal to offer spot bitcoin exchange-traded funds (ETF) from Fidelitys Wise Origin Bitcoin T… [+202 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "hmalik@insider.com (Hamza Fareed Malik)",
    title:
      "Jack Dorsey says Block is building a bitcoin mining system so that anyone can easily buy a rig",
    description:
      'Block is officially building a bitcoin mining system to make mining bitcoin "more distributed and efficient."',
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://images2.markets.businessinsider.com/61e16983c5e27c00185b8d80?format=jpeg",
    publishedAt: "2022-01-14T12:34:09Z",
    content:
      "Jack Dorsey onstage at a bitcoin convention in June.Joe Raedle/Getty Images\r\nBlock is going ahead with building a bitcoin mining system that will be open to individuals and businesses worldwide, its … [+2459 chars]",
  },
  {
    source: {
      id: null,
      name: "Gizmodo.com",
    },
    author: "Jody Serrano",
    title:
      "It Only Took 3 Days for Netflix to Order a Docuseries on the Bonnie and Clyde of the Crypto World",
    description:
      "The news of one of the biggest money laundering schemes in history captivated the world on Tuesday, not so much because of the crime—which involved $4.5 billion in bitcoin and is, yeah, a big deal—but rather because of the couple accused of carrying it out. T…",
    url: "/img/hamza_coder.jpg",
    urlToImage:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4102a58766b858d04921451038439041.jpg",
    publishedAt: "2022-02-12T02:49:00Z",
    content:
      "The news of one of the biggest money laundering schemes in history captivated the world on Tuesday, not so much because of the crimewhich involved $4.5 billion in bitcoin and is, yeah, a big dealbut … [+1948 chars]",
  },
  {
    source: {
      id: "engadget",
      name: "Engadget",
    },
    author: "Igor Bonifacic",
    title: "Robinhood opens cryptocurrency wallet to beta testers",
    description:
      "Back in September\r\n, Robinhood announced plans to test a cryptocurrency wallet within its app. At the time, the company said it would open the beta to a small number of people before expanding availability ahead of a full-scale release. If you joined the wait…",
    url: "./img/hamza_coder.jpg",
    urlToImage:
      "https://s.yimg.com/os/creatr-uploaded-images/2021-09/5035fef0-1bd6-11ec-b7e5-a610838e0b98",
    publishedAt: "2022-01-21T22:57:21Z",
    content:
      "Back in September\r\n, Robinhood announced plans to test a cryptocurrency wallet within its app. At the time, the company said it would open the beta to a small number of people before expanding availa… [+1069 chars]",
  },
];

let card = document.querySelector(".cards");

function apiData() {
  let mydata = newsData.map((data) => {
    return `<div class="internalCard">
    <h1>${data.source.id}</h1>
    <img src=${data.url}>
    <h2>${data.author}</h2>
    <h2>${data.description}</h2>
    </div>`;
  });
  card.innerHTML = mydata;
}
apiData();
