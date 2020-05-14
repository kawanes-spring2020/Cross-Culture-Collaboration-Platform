export class CountryAspects {
  cultureCardArray: Array<Map<String, String>>;
  ContentMap: Map<number, Array<Map<String, String>>>;
  Map1: Map<String, String>;
  constructor() {}

  getChineseAspects() {
    this.cultureCardArray = new Array();
    this.ContentMap = new Map<number, Array<Map<String, String>>>();

    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/china/food/peckingDuck.jpg",
      "Beijing (or Peking) Duck is a dish that is synonymous with the city of Beijing and is a huge hit with foreigners and locals alike."
    );
    this.Map1.set(
      "assets/cultures/china/food/maPoTofu.jpg",
      "One account indicates that the dish existed as early as 1862, in a suburb of the sub-provincial city of Chengdu, the capital of Sichuan province. The character la (麻) signifies this dish is at least a bit spicy and the recipe calls for Sichuan peppercorns and chili oil."
    );
    this.Map1.set(
      "assets/cultures/china/food/kungPaoChicken.jpg",
      "Kung Pao chicken (also transcribed as Gong Bao or Kung Po) is a famous, spicy Sichuan-style specialty dish. Since the dish originated in Sichuan province, the original version of the recipe calls for Sichuan peppercorns."
    );
    this.Map1.set(
      "assets/cultures/china/food/hotpot.jpg",
      "Ah, glorious hotpot, a perfect winter warmer (especially if you are based in the North of China, but honestly popular throughout the whole year!)"
    );
    this.Map1.set(
      "assets/cultures/china/food/hongShaoRou.jpg",
      "Hong Shao Rou translates to Red Braised Pork Belly. It’s a famous dish from Shanghai and is hugely popular. It’s cooked with a combination of ginger, aromatic spices, garlic, chilli peppers, soy sauce, rice wine and sugar."
    );
    this.Map1.set(
      "assets/cultures/china/food/dumpling.jpg",
      "As with many other Chinese staples, there are many variations of dumplings but the great thing is they cater for all tastes. Dumplings are also great fun to make at home as well."
    );
    this.Map1.set(
      "assets/cultures/china/food/chaunr.jpg",
      "A chinese speciality with chicken and beef"
    );
    this.Map1.set(
      "assets/cultures/china/food/biangBiangMian.jpg",
      " It comes from the Xi’an region of China (home to the famous Terracotta Warriors) and is usually served in a big bowl covered with lots of little treats that you are supposed to mix into the noodles."
    );
    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(0, this.cultureCardArray);

    //***Start with history array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/china/history/hanDynasty.jpg",
      "The Han Dynasty began in 206 BCE and lasted 400 years until 220 CE and is considered to be one of the greatest periods in the entire history of China"
    );

    this.Map1.set(
      "assets/cultures/china/history/qinDynasty.jpg",
      "From 221 BCE to 206 BCE the Qin Dynasty (pronounced 'chin') gained control of civilized China.  The Qin didn’t last very long, but made an important impact on China’s future"
    );

    this.Map1.set(
      "assets/cultures/china/history/shangDynasty.jpg",
      "The Shang Dynasty (1600 BCE-1046 BCE) was originally a clan living along the Yellow River during the Xia Dynasty. A clan is group of very close families that are often viewed as one big family"
    );

    this.Map1.set(
      "assets/cultures/china/history/theXiaDynasty.jpg",
      "The Xia Dynasty (2000 BCE-1600 BCE) was the first dynasty in Chinese history. It lasted around 500 years and included the reigns of 17 emperors. An emperor is similar to a king"
    );

    this.Map1.set(
      "assets/cultures/china/history/zhouDynasty.jpg",
      "The Zhou Dynasty (1046 BCE-256 BCE) lasted longer than any other dynasty in Chinese history. The Zhou time period is divided into parts called the Western Zhou and Eastern Zhou because there was a brief disruption in their control of the government"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(1, this.cultureCardArray);
    console.log(this.ContentMap);

    //***Start with art array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/china/art/calligraphy.jpg",
      "The art of calligraphy - and for the ancient Chinese it certainly was an art - aimed to demonstrate superior control and skill using brush and ink"
    );

    this.Map1.set(
      "assets/cultures/china/art/minorArts.jpg",
      "Gold, silver, copper, bronze, ivory, coloured glass, enamel, precious stones, semi-precious hard stones, silk, wood, and amber were all materials transformed into art objects by gifted craftsmen"
    );

    this.Map1.set(
      "assets/cultures/china/art/painting.jpg",
      "Chinese painters painted on various materials in many formats. The most popular formats were on walls, coffins and boxes, screens, silk scrolls which were designed to be looked at in the hand or hung on walls, fixed fans, book covers and folding fans"
    );

    this.Map1.set(
      "assets/cultures/china/art/pottery.jpg",
      "The Chinese were the masters of pottery and ceramics. They produced everything from heavy and functional storage jars in earthenware to exquisitely decorated bowls in the most delicate of porcelain, from vases to garden stools, teapots to pillows"
    );

    this.Map1.set(
      "assets/cultures/china/art/sculpture.jpg",
      "Large-scale figure sculpture has not survived well but some monumental examples can still be seen such as those cut from the rock face at the Longmen Caves, Fengxian temple near Luoyang"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(2, this.cultureCardArray);

    //***Start with performing art array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/china/performingArts/dragon.jpg",
      "Chinese Dragon Dance"
    );

    this.Map1.set(
      "assets/cultures/china/performingArts/opera.jpg",
      "Beijing Opera"
    );

    this.Map1.set(
      "assets/cultures/china/performingArts/kungFu.jpg",
      "Chinese Kung Fu"
    );

    this.Map1.set(
      "assets/cultures/china/performingArts/puppetShow.jpg",
      "Chinese Shadow Shows"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(3, this.cultureCardArray);

    //***Start with taj mahal array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/china/wonder/wall1.jpg",
      "The Great Wall Of China"
    );

    this.Map1.set(
      "assets/cultures/china/wonder/wall2.jpg",
      "The Great Wall Of China"
    );

    this.Map1.set(
      "assets/cultures/china/wonder/wall3.jpg",
      "The Great Wall Of China"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(4, this.cultureCardArray);

    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();
    this.Map1.set("0", "Food");
    this.Map1.set("1", "History");
    this.Map1.set("2", "Art");
    this.Map1.set("3", "Performing Art");
    this.Map1.set("4", "Taj Mahal");

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(5, this.cultureCardArray);

    return this.ContentMap;
  }

  getIndianAspects() {
    this.cultureCardArray = new Array();
    this.ContentMap = new Map<number, Array<Map<String, String>>>();

    this.Map1 = new Map<String, String>();
    this.Map1.set("assets/cultures/india/food/petha.jpg", "Petha From Agra");
    this.Map1.set(
      "assets/cultures/india/food/daalbati.jpg",
      "Daal Baati from Rajasthan"
    );
    this.Map1.set("assets/cultures/india/food/mysorepak.jpg", "Mysore Pak");
    this.Map1.set("assets/cultures/india/food/biryani.jpg", "Dum Biryani");
    this.Map1.set("assets/cultures/india/food/khaja.jpg", "Khaja from Orissa");
    this.Map1.set("assets/cultures/india/food/jalebi.jpg", "Jalebi");
    this.Map1.set("assets/cultures/india/food/sambhar.jpg", "Sambhar");
    this.Map1.set("assets/cultures/india/food/rasagulla.jpg", "Rasagulla");
    this.Map1.set("assets/cultures/india/food/kadhi.jpg", "Kadhi");
    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(0, this.cultureCardArray);

    //***Start with history array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/india/history/indusValleyCivilization.jpg",
      "Petha:This is content for festival"
    );

    this.Map1.set(
      "assets/cultures/india/history/vedicCivilization.jpg",
      "Petha:This is content for festival"
    );

    this.Map1.set(
      "assets/cultures/india/history/theBuddhistEra.jpg",
      "Petha:This is content for festival"
    );

    this.Map1.set(
      "assets/cultures/india/history/harshavardhana.jpg",
      "Petha:This is content for festival"
    );

    this.Map1.set(
      "assets/cultures/india/history/guptaDynasty.jpg",
      "Petha:This is content for festival"
    );

    this.Map1.set(
      "assets/cultures/india/history/alexanderInvasion.jpg",
      "Petha:This is content for festival"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(1, this.cultureCardArray);
    console.log(this.ContentMap);

    //***Start with art array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/india/art/tanjoreArt.jpg",
      "Tanjore Painting"
    );

    this.Map1.set(
      "assets/cultures/india/art/warliFolkPainting.jpg",
      "Warli Folk Paiting"
    );

    this.Map1.set(
      "assets/cultures/india/art/Kalamezhuthu.jpg",
      "Kalamexhuthu Paiting"
    );

    this.Map1.set(
      "assets/cultures/india/art/rajasthaniMiniaturePainting.jpg",
      "Rajasthani Miniature Painting"
    );

    this.Map1.set(
      "assets/cultures/india/art/pattachitraPainting.jpg",
      "Pattachitra Painting"
    );

    this.Map1.set(
      "assets/cultures/india/art/madhubaniPainting.jpg",
      "Madhubani Painting"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(2, this.cultureCardArray);

    //***Start with performing art array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/india/performingArt/bharataNatyam.jpg",
      "BharataNatyam"
    );

    this.Map1.set("assets/cultures/india/performingArt/kathak.jpg", "Kathak");

    this.Map1.set(
      "assets/cultures/india/performingArt/kathakali.jpg",
      "Kathakali"
    );

    this.Map1.set(
      "assets/cultures/india/performingArt/kuchipudi.jpg",
      "Kuchipudi"
    );

    this.Map1.set("assets/cultures/india/performingArt/odissi.jpg", "Odissi");

    this.Map1.set(
      "assets/cultures/india/performingArt/manipuri.jpg",
      "Manipuri Painting"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(3, this.cultureCardArray);

    //***Start with taj mahal array***
    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();

    this.Map1.set(
      "assets/cultures/india/wonder/color.jpg",
      "As the sunlight changes, Taj Mahal colors also changes its color!"
    );

    this.Map1.set(
      "assets/cultures/india/wonder/elephants.jpg",
      "About 1,000 elephants were used to transport the material while building the Taj Mahal"
    );

    this.Map1.set(
      "assets/cultures/india/wonder/money.jpg",
      "32 million rupees were spent to construct the Taj Mahal"
    );

    this.Map1.set(
      "assets/cultures/india/wonder/peacockThrone.jpg",
      "The Peacock Throne was an extraordinary extravagant bejeweled throne that cost twice as much as The Taj Mahal. It’s was lost in 1739"
    );

    this.Map1.set(
      "assets/cultures/india/wonder/shahjahan.jpg",
      "Shah Jahan dedicates the Taj Mahal to his wife Mumtaz Mahal"
    );

    this.Map1.set(
      "assets/cultures/india/wonder/wondersofworld.jpg",
      "Taj Mahal is one of the Seven Wonders of the World"
    );

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(4, this.cultureCardArray);

    this.cultureCardArray = new Array();
    this.Map1 = new Map<String, String>();
    this.Map1.set("0", "Food");
    this.Map1.set("1", "History");
    this.Map1.set("2", "Art");
    this.Map1.set("3", "Performing Art");
    this.Map1.set("4", "Taj Mahal");

    this.cultureCardArray.push(this.Map1);
    this.ContentMap.set(5, this.cultureCardArray);

    return this.ContentMap;
  }
}
