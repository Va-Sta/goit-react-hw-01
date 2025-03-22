import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.headRow}>
          <th className={css.headName}>Type</th>
          <th className={css.headName}>Amount</th>
          <th className={css.headName}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id} className={css.row}>
              <td className={clsx(css.cell, css.cellFirst)}>{item.type}</td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
