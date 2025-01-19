import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({item}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        console.log(item)
        dispatch(addItem(item))
    }
    return (
        <div>
            {item?.map((itm) => (
                <div key={itm.name} className="p-2 m-2 border-bottom position-relative">
                    <div>
                        <div className="d-flex flex-column">
                            <span>{itm.name}</span>
                            <span>${itm.price}</span>
                        </div>
                        <p className="fs-6 fw-light w-75">{itm.description}</p>
                    </div>
                    <div className="mx-5 position-absolute top-50 end-0 translate-middle-y shadow">
                        <button className="p-2 border-0" onClick={()=>handleAddItem(itm)}>Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;