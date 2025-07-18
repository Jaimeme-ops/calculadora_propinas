import type { MenuItem} from "../types"

interface MenuItemProps {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
        onClick={() => addItem(item)}
        >
        <p> {item.name}</p>
        <p className="font-black"> ${item.price}</p>
        
        </button>
    )
}
