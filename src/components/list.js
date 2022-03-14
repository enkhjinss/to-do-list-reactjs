import { ListDetail } from "../components/listDetail.js";
import Check from "../components/check.js";

export const List = ({ tasks }) => {
    return (
        <div className="listsContainer">
            {tasks.map(({ title }, i) => {
                <ListDetail title={title} key={i} />;
            })}

            <Check />
        </div>
    );
};