// state value is the same product list that will be used in multiple functions
var state = 0;
var showMoreState = false;
var products = [
  {
    name: "Apple Watch",
    url: "img/apple_watch.svg",
    description: "Proactive Health Monitor, Ultimate Workout partner, Comprehensive Activity Tracker, Easy ways to connect",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Beats Headphone",
    url: "img/beats_headphone.svg",
    description: "Beats Studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Canceling (Pure ANC) to actively block external noise and real-time audio calibration to preserve clarity, range, and emotion. They continuously pinpoint external sounds to block while automatically responding to individual fit in real time, optimizing sound output to preserve a premium listening experience the way artists intended.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "iMac",
    url: "img/imac.svg",
    description: "A desktop experience that draws you in and keeps you there. This is the idea behind today’s iMac. And now that idea is more powerful than ever. The new iMac is packed with all-new processors, the latest graphics technologies, innovative storage and higher-bandwidth connectivity. And it all comes to life on the brightest and most colourful Retina display iMac has ever seen. So you get an even more immersive experience — and a scintillating new way to take it all in.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "Iphone",
    url: "img/iphone.svg",
    description: "Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system with Depth Control. iPhone XS is everything you love about iPhone. Taken to the extreme.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
  {
    name: "MacBook Pro",
    url: "img/mac_pro.svg",
    description: "With eighth-generation Intel Core processors, MacBook Pro reaches new heights in compute performance. The 15‑inch model now features a 6‑core Intel Core i9 processor that works up to 70 percent faster than the previous generation, enabling up to 4.8GHz Turbo Boost speeds. And a quad‑core processor on the 13‑inch MacBook Pro with Touch Bar now makes it up to twice as fast as the previous generation. So when you’re powering through pro‑level processing jobs like compiling code, rendering 3D models, adding special effects, layering multiple tracks or encoding video, you’ll get everything done. Faster.",
    specifications: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
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
    name: "Mac machine",
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
