import { Welcome, Navbar, Dock } from "#components";
import { Safari, Terminal, Finder, Resume, Text, Image } from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
    </main>
  );
};

export default App;
