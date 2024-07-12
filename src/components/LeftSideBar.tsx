import { useNavigate } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNovoClick = () => {
    navigate('/novo');
  };
  const handleNajpopularnijeClick=()=>{
    navigate('/najpopularnije')
  };

  return (
    <div className="left-sidebar">
      <h2>PRETRAGA</h2>
      <input type="text" placeholder="Enter something" />
      <h2>ZANROVI</h2>
      <ul>
        <li>Naucna fantastika</li>
        <li>Horor</li>
        <li>Popularna psihologija</li>
        <li>Ljubavni romani</li>
        <li>Autobiografije</li>
      </ul>
      <h2>AUTOR</h2>
      <ul>
        <li>Domaci</li>
        <li>Strani</li>
        <li>AI</li>
      </ul>
      <h2 onClick={handleNajpopularnijeClick} style={{ cursor: 'pointer', color: 'green' }}>NAJPOPULARNIJE</h2>
      <h2 onClick={handleNovoClick} style={{ cursor: 'pointer', color: 'blue' }}>NOVO</h2>
    </div>
  );
};

export default LeftSideBar;
