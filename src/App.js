import React from "react";
import CardList from "./components/CardList";
import "./App.css";


import livingIntelkomLogo from './livingin-telkom.png';
import digistarClassLogo from './digi.png';
import telkomIndonesiaLogo from './telind.png';
import dyahFoto from './assets/images/dyahayuw.jpg';
import cewek from './assets/images/female.png';
import cowok from './assets/images/male.png';

const people = [
  {
    name: "Dyah Ayu Wulandari",
    university: "Universitas Brawijaya",
    email: "ayuwulandaridyah1@gmail.com",
    usecase: "Bigbox 5",
    instagram: "https://instagram.com/dyahaw_",
    linkedin: "https://linkedin.com/in/dyahayuw",
    photo: dyahFoto
  },
  {
    name: "Echa Andrea Gustiar",
    university: "Universitas Lampung",
    email: "echaandrea6603@gmail.com",
    usecase: "Bigbox 5",
    instagram: "https://www.instagram.com/echreaa?igsh=MWNwcHFkZ3prZ3R3dQ== ",
    linkedin: "https://www.linkedin.com/in/echa-andrea-gustiar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    photo: cewek
  },
  {
    name: "Rachel Valentina Selima",
    university: "Universitas Katolik Soegijapranata Semarang",
    usecase: "Antares 1",
    email: "22k30008@student.unika.ac.id",
    instagram: "https://www.instagram.com/y0ur.valent_?igsh=MWN6cG1jMHhmazRibQ==",
    photo: cewek
  },
  {
    name: "Zidane Putra Fadilah",
    university: "universitas Sriwijaya",
    usecase: "Antares 1",
    email: "zidaneputraf@gmail.com",
    instagram: "https://www.instagram.com/zidanepf?igsh=MTZ1dWljdW9nZnl4cQ==",
    linkedin: "http://www.linkedin.com/in/zidanepf",
    photo: cowok
  },
  {
    name: "Augrecelline",
    university: "Binus University",
    usecase: "Antares 2",
    email: "cellineisme@gmail.com",
    instagram: "https://www.instagram.com/cellineisme/profilecard/?igsh=MTYwYjBnNzA5MGQyaw==",
    linkedin: "http://linkedin.com/in/augrecelline-ab3945317",
    photo: cewek
  },
  {
    name: "Ilham Ramadhan",
    university: "STMIK Sinar Nusantara",
    usecase: "Antares 2",
    email: "ilhamram332@gmail.com",
    linkedin: "https://www.linkedin.com/in/ilramadhan",
    photo: cowok
  },
  {
    name: "I Nengah Danarsa Suniadevta",
    university: "Universitas Udayana",
    usecase: "Antares 3",
    email: "devtadanarsa69@gmail.com",
    instagram: "https://www.instagram.com/devtadanarsa?igsh=MWgwcnNlY2xiMHBpbw%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/i-nengah-danarsa-suniadevta",
    photo: cowok
  },
  {
    name: "Gilang Wiko Wicaksono",
    university: "Universitas Muhammadiyah Riau",
    usecase: "Antares 3",
    email: "gilang.ikoo15@gmail.com",
    linkedin: "https://www.linkedin.com/in/gilangikoo/",
    photo: cowok
  },
];

function App() {
  return (
    <div className="App">
      <CardList people={people} />
      <div className="logos">
        <img src={livingIntelkomLogo} alt="Living Intelkom Logo" className="logo-livingintelkom" />
        <img src={digistarClassLogo} alt="Digistar Class Logo" className="logo-digistarclass" />
        <img src={telkomIndonesiaLogo} alt="Telkom Indonesia Logo" className="logo-telkomindonesia" />
      </div>
      <div className="logos-left-bottom">
      <span className="author-text">oleh Dyah Ayu Wulandari</span>
      </div>
    </div>
  );
}

export default App;
