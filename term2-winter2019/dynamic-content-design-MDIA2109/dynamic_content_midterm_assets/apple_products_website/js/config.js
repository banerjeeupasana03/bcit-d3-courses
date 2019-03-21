// state value is the same product list that will be used in multiple functions
var state = 0;
var showMoreState = false;
var accordionState = false;
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
    specifications: "Powered by the all-new Apple H1 headphone chip, AirPods deliver a faster and more stable wireless connection to your devices — up to 2x faster when switching between active devices,3 and a 1.5x faster connection time for phone calls.4 The H1 chip also drives voice-enabled Siri access and delivers up to 30 percent lower gaming latency.5 So whether you’re playing games, listening to music or enjoying podcasts, you’ll experience higher-quality sound."
  },
  {
    name: "Apple Home",
    url: "img/apple_home.svg",
    description: "Apple TV 4K lets you watch movies and shows in amazing 4K HDR — and now it completes the picture with immersive sound from Dolby Atmos.1 It streams your favourite channels live. Has great content from apps like Netflix, CBC TV and Sportsnet.2 And thanks to Siri, you can control it all with just your voice.",
    specifications: "1GB = 1 billion bytes; actual formatted capacity less, Siri Remote is compatible with Apple TV (4th generation or later),Requires HDCP when playing protected content. Supports up to 4K HDR or Dolby Vision TVs, HDMI cable, PRICE: $199"
  },
  {
    name: "Apple Pencil",
    url: "img/apple_pencil.svg",
    description: "The new Apple Pencil is designed to be an even more comfortable, natural tool to use. The seamless design — no connectors or moving parts — makes it easy to store. You can even have your Apple Pencil engraved to really make it your own, Apple Pencil set the standard for how drawing, note-taking and marking up documents should feel — intuitive, precise and magical. The new Apple Pencil takes that experience even further. Now you can pair and charge wirelessly and change tools, like a pencil to an eraser, with a simple double-tap.",
    specifications: "Apple Pencil is packed with technology designed to make using it completely intuitive. With imperceptible lag and pixel-perfect precision, it feels like a familiar writing and drawing tool you’ve always used, Automatic pairing, wireless charging and magnetic storage, Free engraving, PRICE: $169"
  },
  {
    name: "Mac Pro 6 Core",
    url: "img/mac_machine.svg",
    description: "Mac Pro is a stunning realization of that ideal. All the elements that define a pro computer — graphics, storage, expansion, processing power and memory — have been re-thought and re-engineered. So you have the power and performance to bring your biggest ideas to life.Engineered around workstation graphics with dual GPUs, PCIe-based flash storage, high-performance Thunderbolt 2, Xeon processors, fast memory and support for 4K video, Mac Pro delivers brilliant performance across the board.",
    specifications: "Mac Pro: 6 core specs- Intel Xeon E5 with 12MB L3 cache and Turbo Boost up to 3.9GHz, Configurable to 3.0GHz 8-core processor with 25MB L3 cache or 2.7GHz 12-core processor with 30MB L3 cache, Configurable to 32GB (four 8GB) or 64GB (four 16GB),Dual AMD FirePro graphics processors,Dual AMD FirePro D500 graphics processors with 3GB of GDDR5 VRAM each,Configurable to 512GB or 1TB2,802.11ac Wi-Fi wireless networking;3 IEEE 802.11a/b/g/n compatible Bluetooth 4.0 wireless technology PRICE: $3499"
  },
  {
    name: "Apple iPad Pro",
    url: "img/ipad.svg",
    description: "With iPad, you get what you need from a computer, along with many incredible things you’d never expect from one. Here are a few reasons why your next computer just might be an iPad.",
    specifications: "iPad features advanced, Apple-designed chips like the A12X Bionic with Neural Engine in iPad Pro.And it has up to 10 hours of battery life to keep you going all day.1 Stay connected on the go with fast Wi‑Fi or LTE Advanced. iPad runs iOS, 18W USB-C Power Adapter,Fingerprint-resistant oleophobic coating,11-inch (diagonal) LED-backlit Multi‑Touch display with IPS technology,600 nits brightness, Embedded M12 coprocessor,Slo‑mo video support for 1080p at 120 fps and 720p at 240 fps, PRICE: from $999"
  }
];
