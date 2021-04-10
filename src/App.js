import { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="all_star.mp4" />
          <File name="Arijit-mashups.mp3" />
        </Folder>
        {/* these are children props.children */}
        <File name="Dog.png" />
        <File name="Cat.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  // console.log(props);
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <span onClick={handleClick}>{name}</span>
      <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  return <div>{props.name}</div>;
};

export default App;
