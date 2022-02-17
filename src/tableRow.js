function TableRow(props) {
    return (
      <div key={props.index}>
        <table className="table-parameters" border="1"> 
        <tr>
            <th>Ім'я:</th>
            <th>Прізвище:</th>
            <th>Днів відпрацьовано:</th>
            <th>Ставка в $:</th>
            <th>Зарплата в $:</th>
        </tr>
            <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>
              <input
                id="days"
                type="text"
                name="days"
                value={props.days}
                onChange={(e) => props.handleChange(props.index, e)}
              />
            </td>
            <td>
              <input
                id="rate"
                type="text"
                name="rate"
                value={props.rate}
                onChange={(e) => props.handleChange(props.index, e)}
              />
            </td>
            <td>{props.days * props.rate}</td>
          </tr>
        </table>
      </div>
    )
  }
  
  export default TableRow