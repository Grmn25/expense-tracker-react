import { useGlobalState } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState()

  const amounts = transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div className="flex justify-between text-2xl font-bold">
      <h3>Tu balance</h3>
      <h1>${total}</h1>

    </div>
  )
}
