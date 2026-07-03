import { json } from "stream/consumers";

export default async function () {
  const url = "http://localhost:8000/api";
  const fetchedData = await fetch(url);
  const jsonData = await fetchedData.json();

  return (
    <>
      <ul>
        {jsonData.map((item: any) => {
          return (
            <li key={item.id}>
              <h1>Name: {item.name}</h1>
              <p>
                <strong>Age: {item.age}</strong>
                <br />
                <strong>Disease: {item.disease}</strong>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
