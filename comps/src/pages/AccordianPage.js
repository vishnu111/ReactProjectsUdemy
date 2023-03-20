import Accordion from "../components/Accordion";
function AccordianPage() {
  const items = [
    {
      id: "saeew",
      label: "JSX?",
      content:
        " (JavaScript XML) is an extended form of JavaScript language syntax that provides a way to write HTML and JavaScript together. React developers are very familiar with JSX.",
    },
    {
      id: "sddsd",
      label: "Hands-on coding environments?",
      content:
        "You don’t get better at swimming by watching others. Coding is no different. Practice as you learn with live code environments inside your browser.",
    },
    {
      id: "wdwdwd",
      label: "No set-up required?",
      content:
        "Start learning immediately instead of fiddling with SDKs and IDEs. It‘s all on the cloud.",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordianPage;
