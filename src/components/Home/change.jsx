import React from "react";
import { Button } from "react-bootstrap";

function Change({ contor, setNumar }) {
  return (
    <Button onClick={() => setNumar(contor + 1)} variant="dark">
      Fa plus unu la {contor}
    </Button>
  );
}

export default Change;
