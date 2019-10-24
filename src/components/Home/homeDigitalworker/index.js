import React from "react";
import "./digitalworker.styles.scss";
import Button from "../../brandedButton";

class Digital extends React.Component {
  render() {
    return (
      <div className="digialsection">
        <h1 className="head">Digital Worker</h1>
        <p className="maintext">
          We automated the innovation and design thinking <br />
          processes, and put them at the backend of the <br />
          application to simplify your journey
        </p>
        <p className="secondtext">
          Learn more about the combined processes steps, benefits and value
        </p>

        <Button>Download the process </Button>
      </div>
    );
  }
}

export default Digital;
