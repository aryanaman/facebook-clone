import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    //BEM(Block Element Modifier) naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* Header */}
          <Header />

          <div className="app__body">
            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />
            {/* widget */}
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
