import { getAllTables } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const NewTableId = ({ setParentData }) => {

  const [newId, setNewId] = useState(0);

  const tables = useSelector(getAllTables);

  for (const table of tables) {
    if (newId < table.id) {
      setNewId(table.id + 1);
    }
  }

  useEffect(() => {
    setParentData(newId);
  }, [setParentData, newId]);

  return (
    <span>
      { newId }
    </span>
  );

};

export default NewTableId;