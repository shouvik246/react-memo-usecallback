import useGetPosts from "./useGetPosts";
const { useState, memo, useCallback } = require("react");

const ChildExample2WithProp = memo(({ posts, handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick()}>Press me</button>
      {/* {posts &&                   // here we are making sure that we have post populated before getting as props
        posts.map((post) => {
          return (
            <>
              <li>
                <ul>{post.title}</ul>
              </li>
            </>
          );
        })} */}
      {console.log("I am Child of Example 2 with props rendered")}
    </>
  );
});

const ChildExample2WithoutProp = memo(() => {
  return (
    <>
      {console.log("I am Child of Example 2 without props rendered")}
      {/* <h3>I am Child of Example 2 without props</h3> */}
    </>
  );
});

const Example2 = () => {
  const [count, setCount] = useState(0);
  // console.time();
  const posts = useGetPosts();
  // console.timeEnd();

  /** useCallbcak is used for function call
   *  Everytime we are increasing the count,
   *  parent component gets rerendered,
   * we get a new refrence of the handleClick method,
   * It makes the child component to think that everytime
   * its getting new refrence of this handleClick method
   * thats why the child component rerender itself.
   */

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  return (
    <>
      <h1>Example 2</h1>
      <ChildExample2WithoutProp />
      <h2>{count}</h2>
      <ChildExample2WithProp posts={posts} handleClick={handleClick} />
      {/* {posts.map((post) => {
        return (
          <>
            <li>
              <ul>{post.title}</ul>
            </li>
          </>
        );
      })} */}
    </>
  );
};

export default Example2;
