import { useContext, useMemo } from "react"
import AppContext from "../context/AppContext"
import TableRow from "./TableRow"
import lodash from "lodash"

interface storeProp {
  stores: any[],
}
type OrderCommerce = boolean | 'asc' | 'desc'
const Table = (props: storeProp) => {
  const { state, setOrderCommerce, setOrderCuit, setPage } = useContext(AppContext)
  const orderStores = () => {
    let values: OrderCommerce[] = []
    let headers: string[] = []
    if (state.order.commerce != 0) {
      values.push(state.order.commerce == 1 ? 'asc' : 'desc')
      headers.push('commerce')
    }
    if (state.order.cuit != 0) {
      values.push(state.order.cuit == 1 ? 'asc' : 'desc')
      headers.push('cuit')
    }
    console.log(values, headers)
    if (headers.length == 0) {
      return props.stores
    }
    return lodash.orderBy(props.stores, headers, values);
  }
  const orderedStores = useMemo(() => orderStores(), [state.order, state.stores]);
  const nextPage = () => {
    setPage(state.page + 1)
  }
  const prevPage = () => {
    setPage(state.page - 1)
  }
  const initialPage = () => {
    setPage(0)
  }
  const maxPage = () => {
    setPage(state.pages)
  }

  return (
    <div>
      <main>
        <div className="columns mt-5 is-centered">
          <div className="column is-10">
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>
                    {state.order.commerce == 0 && <a href="#" onClick={() => setOrderCommerce(1)}>Comercio</a>}
                    {state.order.commerce == 1 && <a href="#" onClick={() => setOrderCommerce(2)}>Comercio🔺</a>}
                    {state.order.commerce == 2 && <a href="#" onClick={() => setOrderCommerce(0)}>Comercio🔻</a>}
                  </th>
                  <th>
                    {state.order.cuit == 0 && <a href="#" onClick={() => setOrderCuit(1)}>cuit</a>}
                    {state.order.cuit == 1 && <a href="#" onClick={() => setOrderCuit(2)}>cuit🔺</a>}
                    {state.order.cuit == 2 && <a href="#" onClick={() => setOrderCuit(0)}>cuit🔻</a>}
                  </th>
                  <th>Concepto 1</th>
                  <th>Concepto 2</th>
                  <th>Concepto 3</th>
                  <th>Concepto 4</th>
                  <th>Concepto 5</th>
                  <th>Concepto 6</th>
                  <th>Balance Actual</th>
                  <th>Activo</th>
                  <th>Ultima venta</th>
                </tr>
              </thead>
              <tbody>
                {orderedStores.map((commerce, i) => <TableRow commerce={commerce} key={i} />)}
              </tbody>
            </table>
            <div className='has-text-right'>
              {state.page > 0 && <button className="button" onClick={initialPage}>1</button>}
              {state.page > 0 && <button className="button ml-2" onClick={prevPage}>⬅{state.page}</button>}
              <button className="button is-info mx-2">{state.page + 1}</button>
              {state.pages - 1 != state.page && <button className="button mr-2" onClick={nextPage}>{state.page + 2}➡</button>}
              <button className="button" onClick={maxPage}>{state.pages}</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Table
