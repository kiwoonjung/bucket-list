import { Route, Switch } from "react-router-dom";

import AllBucketListsPag from "./pages/AllBuketLists";
import NewBucketListPage from "./pages/NewBuketList";
import FavoritePage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllBucketListsPag />
        </Route>
        <Route path="/new-bucket-list">
          <NewBucketListPage />
        </Route>
        <Route path="/favorites">
          <FavoritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
