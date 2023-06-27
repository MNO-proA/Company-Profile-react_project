import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Customer = () => {
  const [customer, setCustomer] = useState();
  let { id } = useParams();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/customers/${id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, [id]);

  return (
    <>
      {customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
      <Link to={"/customers"}>Go back</Link>
    </>
  );
};

export default Customer;
