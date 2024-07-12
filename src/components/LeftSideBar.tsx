import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftSideBar.css';

interface LeftSideBarProps {
  onSearch: (searchTerm: string) => void;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleNovoClick = () => {
    navigate('/novo');
  };

  const handleNajpopularnijeClick = () => {
    navigate('/najpopularnije');
  };

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="left-sidebar">
      <h2>PRETRAGA</h2>
      <input
        type="text"
        placeholder="Search by book title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
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
      <h2 onClick={handleNajpopularnijeClick} style={{ cursor: 'pointer', color: 'green' }}>
        NAJPOPULARNIJE
      </h2>
      <h2 onClick={handleNovoClick} style={{ cursor: 'pointer', color: 'blue' }}>
        NOVO
      </h2>
    </div>
  );
};

export default LeftSideBar;