import * as React from "react";
import Counter from "./Counter";

const HelloWorld = () => {
  return (
    <div className="hello-world">
      <h1>Hello World</h1>
      <p>Welcome to my world.</p>
      <Counter title="My Counter" />
    </div>
  );
};

export default HelloWorld;
