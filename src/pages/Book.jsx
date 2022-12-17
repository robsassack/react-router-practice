import { useOutletContext, useParams } from "react-router-dom";

export function Book() {
  const { id } = useParams();
  // const obj = useOutletContext();

  return (
    <div>
      <h1>Book {id}</h1>
    </div>
  );
}
