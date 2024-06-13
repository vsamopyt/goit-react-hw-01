import clsx from "clsx";
import css from "./TransactionHistory.module.css";
export default function TransactionHistory({items}) {
  return (
    <table className ={clsx(css["transactionHistory-table"])}>
      <thead>
        <tr>
          <th className ={clsx(css["transactionHistory-table-title"] )}>Type</th>
          <th className ={clsx(css["transactionHistory-table-title"])}>Amount</th>
          <th className ={clsx(css["transactionHistory-table-title"])}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item=>{
            return (
                <tr className ={clsx(css["transactionHistory-table-row"])} key={item.id}>
                <td className ={clsx(css["transactionHistory-table-value"], css["type"] )}>{item.type}</td>
                <td className ={clsx(css["transactionHistory-table-value"])}>{item.amount}</td>
                <td className ={clsx(css["transactionHistory-table-value"])}>{item.currency}</td>
              </tr>

            )
        })}

        {/* <tr>
          <td></td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr> */}
      </tbody>
    </table>
  );
}
