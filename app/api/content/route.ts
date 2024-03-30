const posts = [
  {
    title: "Exploring the Great Barrier Reef",
    slug: "exploring-the-great-barrier-reef",
    content:
      "The Great Barrier Reef is the world's largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres (133,000 sq mi). The reef is located in the Coral Sea, off the coast of Queensland, Australia. The Great Barrier Reef can be seen from outer space and is the world's biggest single structure made by living organisms. This reef structure is composed of and built by billions of tiny organisms, known as coral polyps. It supports a wide diversity of life and was selected as a World Heritage Site in 1981. CNN labelled it one of the seven natural wonders of the world.",
  },
  {
    title: "Tips for Baking the Perfect Pie Crust",
    slug: "tips-for-baking-the-perfect-pie-crust",
    content:
      "Baking a delicious pie starts with a flaky and tender crust. Here are some tips to achieve just that: Use cold ingredients! This includes the flour, butter, and water. Cold butter prevents melting and creates pockets of air in the dough, leading to flakiness.  Handle the dough minimally. Overworking the dough will develop the gluten, making the crust tough.  Chill the dough before baking. This allows the gluten to relax and the butter to solidify, again contributing to flakiness.  Pre-bake the crust if using a very wet filling. This prevents a soggy bottom.  Brush the crust with egg wash for a beautiful golden brown color.  Don't be afraid to experiment with different flours and fats for unique flavor profiles.",
  },
  {
    title: "Mountain Hiking for Beginners",
    slug: "mountain-hiking-for-beginners",
    content:
      "Mountain hiking can be a rewarding and exhilarating experience, offering stunning scenery, fresh air, and a chance to challenge yourself physically. However, for beginners, it's important to be prepared and start with trails that match your fitness level. Here are some tips for a successful first mountain hike: Choose the right trail. Look for trails designated as 'easy' or 'beginner-friendly'. These trails will typically have a gentler incline and smoother terrain.  Gear up appropriately. Wear sturdy hiking boots that provide good ankle support, breathable clothing, and a backpack to carry essentials like water, snacks, sunscreen, and a first-aid kit.  Let someone know your plans. Inform a friend or family member about your chosen trail, estimated duration, and expected return time.  Hike with a buddy. Especially for your first hike, it's wise to go with a more experienced friend who can offer guidance and support.  Hydrate and take breaks.  Enjoy the journey! Take your time, savor the views, and appreciate the beauty of nature.",
  },
  {
    title: "Astrophotography: Capturing the Night Sky",
    slug: "astrophotography-capturing-the-night-sky",
    content:
      "Astrophotography is the art of photographing celestial objects and phenomena. It can be a challenging but rewarding hobby, allowing you to capture stunning images of the stars, planets, galaxies, and nebulae. Here are some basic tips for getting started with astrophotography: Choose the right equipment. A sturdy camera tripod is essential for long exposure photography, which is necessary for capturing faint celestial objects. A DSLR camera with a manual mode and a wide-angle lens is also recommended.  Find a dark location. Light pollution from cities significantly impacts astrophotography. Look for locations with minimal light interference, ideally in rural areas.  Set your camera settings. Experiment with long exposure times (several minutes or even hours) and a low aperture to capture enough light. Use a shutter release cable to minimize camera shake during long exposures.  Focus on infinity. Use manual focus and adjust the lens ring until stars appear as sharp points of light.  Take multiple exposures. Astrophotography often involves stacking multiple images to improve signal-to-noise ratio and achieve a cleaner final image.  Edit your photos. Basic post-processing techniques can significantly enhance your astrophotography results.",
  },
  {
    title: "The History of Video Games",
    slug: "the-history-of-video-games",
    content:
      "Video games have come a long way since their humble beginnings. The earliest roots can be traced back to the 1940s with the invention of cathode ray tube amusement devices. However, the first widely recognized video game is credited to be Tennis for Two, developed in 1958. This simple game used an oscilloscope to display a simulated tennis match. The 1960s and 1970s saw the rise of arcade games, with iconic titles like Pong, Space Invaders, and Pac-Man captivating audiences. These games were coin-operated and offered short, yet addictive gameplay experiences. Home video game consoles also began to emerge during this period, with the Magnavox Odyssey in 1972 being a notable pioneer.The 1980s witnessed a boom in the video game industry. The introduction of powerful home consoles like the Atari 2600 and the Nintendo Entertainment System (NES) brought high-quality gaming experiences to living rooms. Personal computers also became a popular platform for video games, with titles like The Legend of Zelda and SimCity gaining immense popularity.  Technological advancements continued to propel the industry forward in the 1990s. The arrival of 16-bit consoles like the Super Nintendo Entertainment System (SNES) and Sega Genesis offered more complex graphics and sound capabilities. 3D graphics began to take shape with the release of the Sega Saturn and the Nintendo 64. Multiplayer gaming also gained traction with the rise of online gaming platforms and LAN parties.The 21st century ushered in an era of even greater innovation. Powerful consoles like the PlayStation 2, Xbox, and Nintendo GameCube delivered immersive 3D worlds and online connectivity. The rise of mobile gaming with smartphones and tablets further broadened the reach of video games, making them accessible to a wider audience than ever before.Today, video games encompass a vast array of genres, from action-adventure and role-playing games to puzzle games and simulations. Esports, competitive gaming at a professional level, has become a global phenomenon with large audiences and lucrative prize pools. Video games have evolved from simple entertainment to a complex cultural force, influencing storytelling, technology, and social interaction.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();

  return NextResponse.json(posts);
}
