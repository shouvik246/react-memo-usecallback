const { useEffect, useState, memo } = require("react");

/*
  Memo

  Problem :- onPress of the button click my child compnent is also 
  rendering,which is creating a extra redender even though no props are
  passed and nothing is updating in child component.

  Solution :- in order to solve this issue, where no props are being 
  passed to child component and its being rerendered again and again,
  we can use memo in the child component so that it can be rendered only
  once.

*/

const ChildExample1 = memo(() => {
  useEffect(() => {
    console.log("I am Child of Example 1 rendered");
  });
  return (
    <>
      <h3>I am Child of Example 1</h3>
    </>
  );
});

const Example1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Example 1 is rendered");
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Example 1</h1>
      <ChildExample1 />
      <button onClick={() => handleClick()}>Press me {count}</button>
    </>
  );
};

export default Example1;
