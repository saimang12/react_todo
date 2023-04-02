import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create } from "./store/store";


const Write = ({ inputRef }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        content: '',
    });

    const onChange = useCallback(e => {
        const { value, name } = e.target;
        setInput({
            ...input,
            id: inputRef.current,
            [name]: value,
            done: false
        })
    }, [input, inputRef])

    const onCreate = useCallback(() => {
        if (input.content.length < 2) {
            alert('더 입력해주세요...')
            return
        }
        dispatch(create(input));
        inputRef.current++;
        navigate('/board')
    }, [dispatch, navigate, input, inputRef])
    return (
        <div className="Write">
            <input type="text" name="content" value={input.content} onChange={onChange} />
            <button onClick={onCreate}>WRITE</button>
        </div>
    )
}

export default Write