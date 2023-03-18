import * as React from "react";

const Title: React.FC<{ title: string }> = (props) => (
  <div className="text-left">
    <p className="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl my-16">{props.title}</p>
  </div>
);

export default Title;
