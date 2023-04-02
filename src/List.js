import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "./store/store";



const List = () => {
    const { todoList } = useSelector(store => store);
    const dispatch = useDispatch();
    return (
        <div className="List">
            <h2>List</h2>
            <ul>
                {
                    todoList.map(it => {
                        return (
                            <li key={it.id} className={it.done ? 'on' : ''}>{it.content} &nbsp;&nbsp;&nbsp;
                                <button onClick={() => dispatch(update(it))}>{it.done ? 'Good' : 'DOIT'}</button>
                                <button onClick={() => dispatch(remove(it))}>X</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;