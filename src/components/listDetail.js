import { AiFillDelete } from "react-icons/ai";
import { db } from "./firebase";

export const ListDetail = ({ title, docid }) => {
    const onDeleteBtn = () => {
        db.collection("todos").doc(docid).delete();
    };

    return (
        <div className="flex align-center idk">
            <input type="checkbox" className="checkInput" />
            <p>
                {title} <AiFillDelete onClick={onDeleteBtn} />
            </p>
        </div>
    );
};
