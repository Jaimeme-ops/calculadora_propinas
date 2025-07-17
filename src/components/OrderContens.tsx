import type { OrderItem } from "../types"

type OrderContensProps = {
  order: OrderItem[]
}

function OrderContens({order} : OrderContensProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">
            Consumo
        </h2>
    </div>
  )
}

export default OrderContens