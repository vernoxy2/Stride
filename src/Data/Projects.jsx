import DisplayAura from "../assets/HomePage/PNG/DisplayAura.png";
import DisplayMannat from "../assets/HomePage/PNG/DisplayMannat.png";
import DisplayOrange from "../assets/HomePage/PNG/DisplayOrange.png";
import DisplayTextAura from "../assets/HomePage/SVG/AuraText.svg";
import DisplayTextMannat from "../assets/HomePage/SVG/MannatText.svg";
import DisplayTextOrange from "../assets/HomePage/SVG/OrangeText.svg";

export const projects = [
  {
    Display: DisplayAura,
    DisplayText: DisplayTextAura,
    Maintext: (
      <>
        Creative <br className="hidden lg:block" /> brilliance, lasting <br className="hidden lg:block" /> effect.
      </>
    ),
    address: (
      <>
        <span className="font-bold">Aura,</span> Survey No-612, <br className="hidden lg:block" /> Opposite Gardencity, Ankleshwar
      </>
    ),
  },
  {
    Display: DisplayMannat,
    DisplayText: DisplayTextMannat,
    Maintext: (
      <>
        Fresh concepts, <br className="hidden lg:block" /> enduring <br className="hidden lg:block" /> impact.
      </>
    ),
    address: (
      <>
        <span className="font-bold">Mannat Residency,</span> Behind Decent <br className="hidden lg:block" /> Hotel, Nr. GIDC Bus Station, <br className="hidden lg:block" /> Ankleshwar-393001, Gujarat
      </>
    ),
  },
  {
    Display: DisplayOrange,
    DisplayText: DisplayTextOrange,
    Maintext: (
      <>
        Leading global <br className="hidden lg:block" /> private real estate <br className="hidden lg:block" /> investors
      </>
    ),
    address: (
      <>
        <span className="font-bold">Orange City,</span> Opposite Vastu Vila, <br className="hidden lg:block" /> Hasot Road, Ankleshwar
      </>
    ),
  },
];
