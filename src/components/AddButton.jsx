import Plus from "../icons/Plus"
import colors from "../assets/colors.json"
import { useRef } from "react"
import { db } from "../appwrite/databases"
import { useContext } from "react"
import { NoteContext } from "../context/NoteContext"

const AddButton = () => {

  const { setNotes } = useContext(NoteContext);

  const startPos = useRef(10)

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startPos.current,
        y: startPos.current
      }),
      colors: JSON.stringify(colors[1]),
    };

    startPos.current += 10

    const response = await db.notes.create(payload);
    setNotes((prevState) => [response, ...prevState]);
  }

  return (
    <div id="add-btn" onClick={addNote}>
        <Plus />
    </div>
  )
}

export default AddButton