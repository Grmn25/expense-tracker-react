import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import { IncomeExpenses } from "./components/IncomeExpenses";

const App = () => {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w2/5 gapx2">
          <div className="bg-zinc-800 p-10 rounded-lg flex">
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}


export default App
