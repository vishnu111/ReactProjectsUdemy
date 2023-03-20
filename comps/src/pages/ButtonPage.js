import Button from "../components/Button";
import { GoBell } from "react-icons/go";
function ButtonPage() {
  const handleClick = () => {
    console.log("clicked");
  };
  //   Here, We are passing some props to Button. Some of the props are
  //   declared in the Button.js with theirs names and collected. The other
  // props like onClick are collected into ...rest in the Button.js
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>

      <div>
        <Button danger rounded>
          drink redbull
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
