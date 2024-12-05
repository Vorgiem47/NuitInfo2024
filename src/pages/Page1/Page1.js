import './Page1.css';
import { gsap, Power3 } from 'gsap';
import {useRef, useEffect} from 'react'
import Header from '../Topbar/Topbar';

const Page1 = () => {

  const animRef1 = useRef(null);
  const animRef2 = useRef(null);
  const animRef3 = useRef(null);
  const animRef4 = useRef(null);
  const animRef5 = useRef(null);

  useEffect(() => {
    if (!animRef1.current || !animRef2.current || !animRef3.current || !animRef4.current || !animRef5.current)
      return;

    gsap.to(animRef1.current, {opacity: 1, duration: 1, ease: Power3.easeInOut});
    gsap.to(animRef2.current, {opacity: 1, duration: 2, ease: Power3.easeInOut});
    gsap.to(animRef3.current, {opacity: 1, duration: 3, ease: Power3.easeInOut});
    gsap.to(animRef4.current, {opacity: 1, duration: 4, ease: Power3.easeInOut});
    gsap.to(animRef5.current, {opacity: 1, duration: 4, ease: Power3.easeInOut});
  }, []);

  const images = [
    {img: 'https://media.licdn.com/dms/image/v2/D4E03AQG2g4MMbM74Vg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710182805058?e=1738800000&v=beta&t=RD7NkEhMgSsQGwpvbrkFuZFi2kwOQHkpqpDBN1bT5uY', name: "Auguste Mulley"},
    {img: 'https://media.licdn.com/dms/image/v2/D4E03AQE3e3k3ruAyMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705681446920?e=1738800000&v=beta&t=0Y1wUgghkYcpw7Upm5LgbvcYchqBW1J9XtEkqsISpDk', name: "Virgile Mulley"},
    {img: 'https://media.licdn.com/dms/image/v2/C4E03AQHhPanir0nGuw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663932052675?e=1738800000&v=beta&t=k6-gwqSJnkE8j2mAQYTXCyABeXULadLgj4LPsrkNuhw', name: "Damien Collet-Lamoureux"},
    {img: 'https://media.licdn.com/dms/image/v2/D4E03AQFk4yinajLR0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695821196327?e=1738800000&v=beta&t=ots709pNPg_EPr20MGUs_SKSRQgwR3Wn69MVmFyPWfo', name: "Noé Cornu"},
    {img: 'https://media.licdn.com/dms/image/v2/D4D03AQHUED21uiFUtQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1678284122629?e=1738800000&v=beta&t=U22W-6pl_z3lk28f1PAjMRaZmBBszPWvhMZkL8SaZFo', name: "Fady Assem"},
    {img: 'https://media.licdn.com/dms/image/v2/D4E35AQEN4nzH_18O3g/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1732922632749?e=1733911200&v=beta&t=LnbXz6k7tf7oAM9KRBeENHPJCNle5pSs8QQd78AS93U', name: "Eliott Duhau"},
  ];

  const defis = [
    {name: "Se battre à mort", company: "UFC"},
    {name: "Manger du couscous", company: "Dindon industry"},
    {name: "Devenir chauve", company: "Bold"},
    {name: "Soulever des trucs lourds", company: "Tg"},
  ];

  return (
    <div className="Page1div">
      <Header />
      <img ref={animRef1} src='https://www.nuitdelinfo.com/materiel_communication/2024/tshirt/N2I2024_visuels-simple.png' className='logoNuitInfo' alt="Logo Nuit de l'info" />
      <h1 ref={animRef2}>Les défis qu'on a choisis :</h1>
      <div ref={animRef3} className='allDefiDiv'>
        <ul>
          {defis.map((defi, index) => (
            <li key={index} className="defiItem">
              <strong>{defi.name}</strong> - {defi.company}
            </li>
          ))}
        </ul>
      </div>
      <h1 ref={animRef4}>Notre équipe</h1>
      <div ref={animRef5} className='allPictureDiv'>
        {images.map((image, index) => (
          <div key={index} className="pictureDiv">
            <img className='picture' src={image.img} alt={`${index + 1}`} />
            <h2>{ image.name }</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
