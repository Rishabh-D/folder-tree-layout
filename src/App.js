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
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(direction);
  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon" />
        <i className={`caret ${direction} icon`} />
      </span>
      {name}
      <div style={{ marginLeft: "20px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    mp3: "play circle",
    jpeg: "file image",
    png: "file image outline",
  };

  return (
    <div>
      <span>
        <i className={`caret ${fileIcons[fileExtension]} icon`}></i>
      </span>
      {props.name}
    </div>
  );
};

export default App;
