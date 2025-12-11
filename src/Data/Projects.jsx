import DisplayAura from "../assets/HomePage/PNG/DisplayAura.png";
import DisplayMannat from "../assets/HomePage/PNG/DisplayMannat.png";
import DisplayOrange from "../assets/HomePage/PNG/DisplayOrange.png";

export const projects = [
  {
    id: "01",
    Display: DisplayAura,
    Maintext: <><span className="font-bold">Aura</span> <br /> Redefine Living</>,
    location: <><span className="font-bold">Aura,</span> Survey No-612, Opposite Gardencity, Ankleshwar</>,
    link: "/projects/aura-redefine_living",
  },
  {
    id: "02",
    Display: DisplayOrange,
    Maintext: <><span className="font-bold">Orange City</span> <br /> <span className="text-base"> The Brighter Tomorrow </span></>,
    location: <><span className="font-bold">Orange City,</span> Opposite Vastu Vila, Hasot Road, Ankleshwar</>,
    link: "/projects/orange_city",
  },
  {
    id: "03",
    Display: DisplayMannat,
    Maintext: <><span className="font-bold">Mannat Residency</span> <br /> <span className="text-base"> The Brighter Tomorrow </span></>,
    location: (
      <>
       <span className="font-bold"> Mannat Residency,</span> Behind Decent Hotel, Nr. GIDC Bus Station,
        Ankleshwar
      </>
    ),
    link: "/projects/mannat_residency",
  },
];
