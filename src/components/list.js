import { ListDetail } from "../components/listDetail.js";
import Check from "../components/check.js";

export const List = ({ tasks }) => {
    return (
        <div className="listsContainer">
            <div className="listContainer flex column align-center ">
                {tasks.map(({ title , docid }, i) => (
                    <ListDetail title={title} docid={docid}  key={i} />
                ))}
            </div>
            <Check />
        </div>
    );
};
