import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordianPage from "./pages/AccordianPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
//Here, inside route we are sending the inside component as children to it, and we are verifying if the path name in the Route prop is same as we have currently in the url. If yes, we are returing that children to display or we are returning null
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-6 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordian">
          <AccordianPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}
export default App;
