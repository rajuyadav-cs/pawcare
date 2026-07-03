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
            <li>
              <h1>Name: {item.name}</h1>
              <p>
                <h3>Age: {item.age}</h3>
                <h3>Disease: {item.disease}</h3>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
