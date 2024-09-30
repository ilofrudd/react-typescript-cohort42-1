// import { useState } from "react";


import Button from "components/Button/Button";
import { ButtonComponent } from "components/Button/styles";
import { CounterProps } from "./types";
import { CounterWrapper,
         ButtonControl,
         Count,
 } from "./styles";
// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Counter({ count, onMinus, onPlus }: CounterProps) {
  // const [count, setCount] = useState<number>(0);
  // 1. count - это само сотояние(state), при его изменении обновляется компонент
  // 2. setCount - это функция(setState), которая изменяет сотояние(state). Является единственным способом изменения состояния
  // 3. useState - ф-я хук(вспомогательные функции из библиотеки React для работы и манипуляции компонентами). Функция, которая
  // возвращает массив из 2 элементов: 1 эл - это состояние, а 2 - Й setState
  // const onPlus = () => {
  //   setCount((prevValue: number) => {
  //     return prevValue + 1;
  //   });
  // };

  // const onMinus = () => {
  //   setCount((prevValue: number) => {
  //     return prevValue - 1;
  //   });
  // };

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );

}

export default Counter;
