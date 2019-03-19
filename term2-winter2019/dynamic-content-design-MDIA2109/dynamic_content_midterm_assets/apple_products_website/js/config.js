// state value is the same product list that will be used in multiple functions
var state = 0;
var showMoreState = false;
var products = [
  {
    name: "Apple Watch",
    url: "img/apple_watch.svg",
    description: "Proactive Health Monitor, Ultimate Workout partner, Comprehensive Activity Tracker, Easy ways to connect",
    specifications: "TECHNOLOGY: GSM/HSPA/LTE, BODY:44 x 38 x 10.7 mm (1.73 x 1.50 x 0.42 in), BUILD: 	Stainless Steel frame; all-ceramic/sapphire crystal back, DISPLAY: 	LTPO AMOLED capacitive touchscreen, 16M colors,	1.78 inches, 10.0 cm2 (~60.0% screen-to-body ratio), PLATFORM: watchOS 5.0, upgradable to 5.1.3, PRICE: $519 and above"
  },
  {
    name: "Beats Headphone",
    url: "img/beats_headphone.svg",
    description: "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Canceling (Pure ANC) to actively block external noise and real-time audio calibration to preserve clarity, range, and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real time, optimizing sound output to preserve a premium listening experience the way artists intended.",
    specifications: "BRAND NAME: Beats, INCLUDED COMPONENTS: Beats Solo3 wireless headphones, carrying case, 3.5mm RemoteTalk cable, Universal USB charging cable (USB-A to USB Micro-B), quick Start guide, warranty card, CONNECTOR TYPE: Bluetooth DETAILS: Beats Solo3 Wireless stays true to its predecessor with bold styling and a streamlined design.Beats by Dr. Dre is a leading audio brand founded in 2006 by Dr. Dre and Jimmy Iovine. Through its family of premium consumer headphones, earphones, and speakers, Beats has introduced an entirely new generation to the possibilities of premium sound entertainment. *Requires iCloud account and macOS Sierra, iOS 10, or watchOS 3, PRICE: $399.95"
  },
  {
    name: "iMac",
    url: "img/imac.svg",
    description: "A desktop experience that draws you in and keeps you there. This is the idea behind today’s iMac. And now that idea is more powerful than ever. The new iMac is packed with all-new processors, the latest graphics technologies, innovative storage and higher-bandwidth connectivity. And it all comes to life on the brightest and most colourful Retina display iMac has ever seen. So you get an even more immersive experience — and a scintillating new way to take it all in.",
    specifications: "DISPLAY: 5K Retina Display,27-inch (diagonal) Retina 5K display,5120‑by‑2880 resolution with support for one billion colours, PROCESSOR: 8 Core 3.2GHz Intel Xeon W,Turbo Boost up to 4.2GHz, CONFIGURABLE TO: 10 core, 14 core, 18 core, PRICE: $6299"
  },
  {
    name: "Iphone Xs",
    url: "img/iphone.svg",
    description: "Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system with Depth Control. iPhone XS is everything you love about iPhone. Taken to the extreme.",
    specifications: "DISPLAY: 6.1 inch retina display, 1792x828 resolution, 326 ppi,True Tone display, 3D Touch,625 cd/m2 max brightness (typical), Fingerprint-resistant oleophobic coating,Rated IP68 (maximum depth of 2 metres up to 30 minutes) under IEC standard 60529, CHIP: A12 Bionic chip, CAMERA: Dual 12MP wide-angle and telephoto cameras, iOS 12, PRICE: $1519 "
  },
  {
    name: "MacBook Pro 13 Inch",
    url: "img/mac_pro.svg",
    description: "With eighth-generation Intel Core processors, MacBook Pro reaches new heights in compute performance. The 15‑inch model now features a 6‑core Intel Core i9 processor that works up to 70 percent faster than the previous generation, enabling up to 4.8GHz Turbo Boost speeds. And a quad‑core processor on the 13‑inch MacBook Pro with Touch Bar now makes it up to twice as fast as the previous generation. So when you’re powering through pro‑level processing jobs like compiling code, rendering 3D models, adding special effects, layering multiple tracks or encoding video, you’ll get everything done. Faster",
    specifications: "DISPLAY: Retina Display, 500 nits brightness, PROCESSOR: Configurable to 2.5GHz dual-core Intel Core i7, Turbo Boost up to 4.0GHz, with 64MB of eDRAM, MEMORY: 8GB of 2133MHz LPDDR3 onboard memory, GRAPHICS: Intel Iris Plus Graphics 640, OPERATING SYSTEM: macOS, BATTERY/POWER: Up to 10 hours wireless web, PRICE: $1729"
  },
  {
    name: "Airpods",
    url: "img/airpods.svg",
    description: "Just take them out and they’re ready to use with all your devices. Put them in your ears and they connect instantly. Speak into them and your voice sounds clear. Introducing AirPods. Simplicity and technology, together like never before. The result is completely magical.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Apple Home",
    url: "img/apple_home.svg",
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.1 It streams your favourite channels live. Has great content from apps like Netflix, CBC TV and Sportsnet.2 And thanks to Siri, you can control it all with just your voice.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Apple Pencil",
    url: "img/apple_pencil.svg",
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.1 It streams your favourite channels live. Has great content from apps like Netflix, CBC TV and Sportsnet.2 And thanks to Siri, you can control it all with just your voice.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Mac Pro",
    url: "img/mac_machine.svg",
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.1 It streams your favourite channels live. Has great content from apps like Netflix, CBC TV and Sportsnet.2 And thanks to Siri, you can control it all with just your voice.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Apple iPad",
    url: "img/ipad.svg",
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.1 It streams your favourite channels live. Has great content from apps like Netflix, CBC TV and Sportsnet.2 And thanks to Siri, you can control it all with just your voice.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  }
];
