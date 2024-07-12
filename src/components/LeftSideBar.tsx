import './LeftSideBar.css';

const LeftSideBar: React.FC = () => {
  return (
    <div className="left-sidebar">
      <h2>PRETRAGA</h2>
      <input type="text" placeholder="Enter something" />
      <h2>ZANROVI</h2>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
        <li>List item 4</li>
        <li>List item 5</li>
      </ul>
      <h2>AUTOR</h2>
      <ul>
        <li>List item A</li>
        <li>List item B</li>
        <li>List item C</li>
      </ul>
      <h2>NAJPOPULARNIJE</h2>
      <h2>NOVO</h2>
    </div>
  );
};

export default LeftSideBar;
