import { MORE, TRASH, MOVEBACK } from "../img";

export default function More(props) {
    const {
        item,
        removeForever,
        changeStatusSingleTodo,
        isMoreVisible,
        setIsMoreVisible,
      } = props;
  return (
    <div className="d-flex">
      <div className="">
        <button
          className="more-button me-1"
          onClick={() => setIsMoreVisible(!isMoreVisible)}
        >
          <img className="more" src={MORE} alt="more" />

        </button>
        {item.status !== "Trash"
          ? isMoreVisible && (
              <button className="more-background more-background-toTrash"
                //  className=" modal-background  modal-buttons modal-background-toTrash"
                onClick={() => changeStatusSingleTodo(item.id, "Trash")}
              >
                <div className="d-flex align-content-center">
                    <img className="trashLogo ms-3 me-3" src={TRASH} alt="trashLogo" />
                    <p className="more-text">Move To Trash</p>
                </div>
              </button>
            )
          : isMoreVisible && (
              <div className="more-background more-background-inTrash"
              // className="modal-background modal-background-inTrash modal-buttons d-flex"
              >
                <div>
                  <button className=" mt-3 more-buttons"
                    //  className="modal-background "
                    onClick={
                      () => {
                        removeForever(item.id);
                        setIsMoreVisible(false);
                      }
                      // changeStatusSingleTodo(item.id, "Trash")
                    }
                  >
                    <div className="d-flex">
                        <img className="trashLogo ms-3 me-3" src={TRASH} alt="trashLogo" />
                        <p className="more-text">Delete Forever</p>
                    </div>
                  </button>
                </div>
                <div>
                  <button className="mt-2 more-buttons"
                    // className="modal-background"
                    onClick={() => {
                      changeStatusSingleTodo(item.id, "To Do");
                      setIsMoreVisible(false);
                    }}
                  >
                    <div className="d-flex">
                        <img className="trashLogo ms-3 me-3" src={MOVEBACK} alt="moveToDone" />
                        <p className="more-text">Move Back To To Do</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
