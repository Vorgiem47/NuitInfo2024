import './Page2.css';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/page3');
  };
  return (
    <><div class="title">
      The Game is Loading
    </div><div className="Page2div">
        <div className="loading-bar-container">
          <div className="loading-bar"></div> {/* La barre qui se remplit */}
        </div>
      </div><button className="minimal-button" onClick={handleButtonClick}>Skip</button></>
  );
}

export default Page2;
