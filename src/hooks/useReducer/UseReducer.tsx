import React, { useReducer } from "react";

enum CountActionKind {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
}

interface ICountAction {
  type: CountActionKind;
  payload: number;
}

interface ICountState {
  count: number;
}

const counterReducer = (state: ICountState, action: ICountAction) => {
  const { type, payload } = action;
  console.log("state", state);
  console.log("type", type);
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};

const UseReducer = (props: any) => {
  /**
   *   syntax basic
   *   const [state, dispatch] = useReducer(reducer, initialArg, init?)
   * use to manage state global
   * @param
   * reducer ==> làm hàm rút gọn chỉ định làm thế nào để set lại state
   * nên lấy trạng thái làm đối số và trả về trạng thái tiếp theo
   * initialArg: giá trị state khởi tạo ==> có thể là bất kì kiểu dữ liệu nào
   *
   * @returns
   *
   */

  /**
   * Use Reducers
   */
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleIncreaseClick = () => {
    console.log("hello world");
    dispatch({
      type: CountActionKind.INCREASE,
      payload: 1,
    });
  };

  const handleDecreaseClick = () => {
    dispatch({
      type: CountActionKind.DECREASE,
      payload: 1,
    });
  };
  return (
    <div>
      <p>Number: {state.count}</p>
      <button onClick={handleIncreaseClick}>Nhấn để tăng giá trị</button>
      <button onClick={handleDecreaseClick}>Nhấn để giảm giá trị</button>
    </div>
  );
};

export default UseReducer;
