import NewChat from "./NewChat"

const Sidebar = () => {
  return (
    <div className="p-2 flex flex-col h-screen ">
        <div className="flex-1 ">
            <div className="">
                {/* Newchat */}
                <NewChat/>
            </div>
            <div className="">
                {/* Modal selection */}
            </div>
            <div className="">
                {/* map through chat rows */}
            </div>
        </div>
    </div>

  )
}

export default Sidebar