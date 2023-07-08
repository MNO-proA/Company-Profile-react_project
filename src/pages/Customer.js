import NotFound from "../components/NotFound";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "../shared";

const Customer = () => {
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState(false);
  let { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    const url = `${baseUrl}/api/customers/${id}`;
    fetch(url)
      .then((response) => {
        if (response.status === 404) {
          // redirect to 404 page
          // render a 404 component in this page
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, [id]);

  return (
    <>
      {notFound ? <NotFound id={id} customer="customer" /> : null}
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
