import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState();
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/customers/`;
    // const url = "https://httpstat.us/50";
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 500) {
          setError(true);
        } else if (!response.ok) {
          setError(true);
          throw new Error("Something went wrong, try again");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          setCustomers(data.customers);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (notFound === true) {
    return (
      <>
        <p>Page not found</p>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong. Try again later</p>
      </>
    );
  }

  return (
    <>
      {customers ? (
        <>
          <h1>Here are the customers: </h1>
          {customers.map((customer) => {
            return (
              <p key={uuidv4()}>
                <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
              </p>
            );
          })}
        </>
      ) : null}
    </>
  );
}
