import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { db } from "./firebase";

export const ListDetail = ({ title, docid , isCheck}) => {
    const onDeleteBtn = () => {
        db.collection("todos").doc(docid).delete();
    };

    const onCheck = () => {
       
    }

    return (
        <div className="flex align-center idk space-between">
            <div className="flex align-center">
                <input type="checkbox" className="checkInput" onChange={ onCheck }/>
                <p>{title}</p>
            </div>
            <div>
                <AiFillDelete onClick={onDeleteBtn} />
                <BiEdit className="editIcon" />
            </div>
        </div>
    );
};
