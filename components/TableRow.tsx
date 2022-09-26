const TableRow = (props: any) => {
  const { commerce } = props
  return (
    <tr>
      <td>{commerce.id}</td>
      <td>{commerce.commerce}</td>
      <td>{commerce.cuit}</td>
      <td>{commerce.concepts[0] ? commerce.concepts[0] : ''}</td>
      <td>{commerce.concepts[1] ? commerce.concepts[1] : ''}</td>
      <td>{commerce.concepts[2] ? commerce.concepts[2] : ''}</td>
      <td>{commerce.concepts[3] ? commerce.concepts[3] : ''}</td>
      <td>{commerce.concepts[4] ? commerce.concepts[4] : ''}</td>
      <td>{commerce.concepts[5] ? commerce.concepts[5] : ''}</td>
      <td>{commerce.balance}</td>
      <td>{commerce.active}</td>
      <td>{commerce.lastSell}</td>
    </tr>
  )
}

export default TableRow
