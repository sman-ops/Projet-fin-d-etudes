import React from "react";
import { useParams } from "react-router-dom";
function ViewEvenOnline() {
  const { id } = useParams();
  return (
    <div
      className="user"
      style={{
        width: "100%",
        marginLeft: "5%",
        height: "65%",
        marginRight: "5%",
      }}
    >
      <h2
        style={{ background: "#6495ED", color: "white", borderRadius: "3px" }}
      >
        Online Event
      </h2>

      <h3 style={{ marginBottom: "30%" }}>Name of event</h3>
    </div>
  );
}

export default ViewEvenOnline;
