import Typewriter from "typewriter-effect";

const TestC = () => {
  return (
    <Typewriter
      options={{
        strings: ["Hello", "World"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TestC;
