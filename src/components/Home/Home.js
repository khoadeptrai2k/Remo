import { Route, Routes } from "react-router-dom";
import Tasks from "../../screens/Task/Tasks";
import Header from "../Common/Header";
import Payment from '../../pages/payments/payment';
import Expense from '../../pages/expenses/expense';

function Home() {
  return (
    <div className="main px-lg-4 px-md-4">
      <Header />
      <div className="body d-flex py-lg-3 py-md-2">
        <Routes>
          <Route exact path={`/tasks`} element={<Tasks />} />
          <Route exact path={`/payments`} element={<Payment />} />
          <Route exact path={`/expenses`} element={<Expense />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;
