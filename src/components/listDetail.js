export const ListDetail = ({ title }) => {
    console.log(title);
    return (
        <div className="listContainer flex justify-center">
            <div className="flex align-center idk">
                <input type="checkbox" className="checkInput" />
                <p>{title}</p>
            </div>
        </div>
    );
};
