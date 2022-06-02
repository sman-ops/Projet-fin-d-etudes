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
        height: "90%",
        marginRight: "5%",
        position: "relative",
        paddingBottom: 40,
        paddingInline: 20,
      }}
    >
      <div
        style={{
          background: "#6495ED",
          width: "150px",
          color: "white",
          padding: "10px",
          borderRadius: 7,
          textAlign: "center",
          position: "absolute",
          top: -23,
        }}
      >
        Online event
      </div>

      <h3 style={{ marginBottom: "30%" }}>Name of event </h3>
    </div>
  );
}

export default ViewEvenOnline;
