import React, { useState } from "react";
import { number } from "yup";

type Props = {};
interface IAge {
  age: number;
}
function Counter() {
  const [count, setCount] = React.useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>click me to increase number {count}</button>
    </>
  );
}

function ChangeText() {
  const [text, setText] = React.useState<string>("");

  const handleOnChange = (e: any) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setText("");
  };

  return (
    <>
      <h1>Change value input {text}</h1>
      <input type="text" value={text} onChange={handleOnChange} />
      <button onClick={handleClick}>Reset Text</button>
    </>
  );
}

function IsCheckLike() {
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const handleOnChange = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <h1> Check Like</h1>
      <input
        type="checkbox"
        id="isCheck"
        checked={isLike}
        onChange={handleOnChange}
      />
      <label htmlFor="isCheck"> I Like This</label>
      {isLike ? "You like it" : ""}
    </>
  );
}

function RenderAge(props: IAge) {
  const { age } = props;
  const [prevAge, setPrevAge] = React.useState<number>(age);
  const [text, setText] = React.useState<string | null>(null);
  if (age !== prevAge) {
    setPrevAge(age);
    setText(age > prevAge ? "Gia Di" : "Tre HOn");
  }
  return (
    <>
      <p>Tuổi của bạn là: {age}</p>
      {"tuổi của bạn đang " && <p>{text}</p>}
    </>
  );
}

const HookState = (props: Props) => {
  const [age, setAge] = React.useState<number>(0);

  const [name, setName] = React.useState<string>("Bui Van Vu");

  const handleClickUp = () => {
    setAge(age + 1);
  };

  const handleClickDown = () => {
    setAge(age - 1);
  };
  return (
    <div>
      <h1>Hello State</h1>
      <Counter />
      <ChangeText />
      <IsCheckLike />

      <h1>Test Age</h1>
      <button onClick={handleClickUp}>Cick Me De Tang</button>
      <button onClick={handleClickDown}>Cick Me De Tang</button>
      <RenderAge age={age} />
    </div>
  );
};

export default HookState;
