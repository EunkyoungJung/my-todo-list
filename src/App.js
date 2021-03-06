import logo from "./logo.svg";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem.js";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead
          todayDate="2021년 1월 18일"
          day="월요일"
          leftoverItemCount={2}
        />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
