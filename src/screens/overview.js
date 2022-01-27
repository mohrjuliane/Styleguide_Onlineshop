import React from "react";

function Overview({ name, subHeadlines }) {
  return (
    <>
      <h1 className="font-dark">Overview</h1>
      <section id={subHeadlines[0]}>
        <h2 className="font-dark gap-top-large">{subHeadlines[0]}</h2>
        <p className="font-dark">
          This style guide is a guideline for the
          <span className="bold"> "Bike Friends Salzburg" </span>
          online shop. Bike Friends Salzburg is a registered cycling club and has
          about 115 members, who have a passion for mountain biking and road
          biking. The manual is intended for everyone who works with the
          application and should lead to a consistent design and coding style.
        </p>
      </section>
      <section id={subHeadlines[1]}>
      <h2 className="font-dark gap-top-large">{subHeadlines[1]}</h2>
      <p className="font-dark">
        The members should be able to order items (team jerseys, bottles, ...)
        with the help of an online shop.
      </p>
      <p className="font-dark gap-top-small">
        <span className="bold">Problem:</span> Manufacturer of the items
        produces only when a required quantity is reached.
      </p>
      <p className="font-dark gap-top-small">
        <span className="bold">Solution:</span> The members' orders are stored
        in the background and when the required quantity is reached, the club
        chairman receives a list of the ordered items by e-mail. After that the
        club chairman is responsible for the order processing and has to send
        the order list to the manufacturer.
      </p>
      <p className="font-dark gap-top-small">
        So from the members' point of view the application is an{" "}
        <span className="bold">online shop</span> and from the club chairman's
        point of view it is an <span className="bold">organization tool</span>.
      </p>
      </section>
    </>
  );
}

export default Overview;
