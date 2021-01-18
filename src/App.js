import logo from "./logo.svg";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead
          todayDate="2021년 1월 18일"
          day="월요일"
          leftoverItemCount={2}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
