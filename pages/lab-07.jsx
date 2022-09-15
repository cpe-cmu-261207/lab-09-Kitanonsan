import React from "react";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import { themes } from "../lib/themes";
import { ThemeContext } from "../context/ThemeContext";
import Mainlayout from "../layout/Mainlayout";

export default function Lab07() {
  themes;

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [selectTheme, setSelectTheme] = useState(themes.light);

  const addTodos = () => {
    const newTodos = [{ title: todoInput, complete: false }, ...todos];
    setTodos(newTodos);
    setTodoInput("");
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveTodo();
  }, [todos]);

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].complete = !todos[idx].complete;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx === 0) {
      return;
    } else {
      const temp = [...todos];
      temp[idx] = todos[idx - 1];
      temp[idx - 1] = todos[idx];
      setTodos(temp);
    }
  };

  const moveDown = (idx) => {
    if (idx === todos.length - 1) {
      return;
    } else {
      const temp = [...todos];
      temp[idx] = todos[idx + 1];
      temp[idx + 1] = todos[idx];
      setTodos(temp);
    }
  };

  const saveTodo = () => {
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("Todo List", todoStr);
  };

  useEffect(() => {
    const todoStr = localStorage.getItem("Todo List");
    if (todoStr === null) {
      setTodos([]);
    } else {
      setTodos(JSON.parse(todoStr));
    }
  }, []);

  const saveSelectTheme = () => {
    const selectThemeStr = JSON.stringify(selectTheme);
    localStorage.setItem("Theme", selectThemeStr);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    saveSelectTheme();
  }, [selectTheme]);

  useEffect(() => {
    const selectThemeStr = localStorage.getItem("Theme");
    if (selectThemeStr === null) setSelectTheme(themes.light);
    else setSelectTheme(JSON.parse(selectThemeStr));
  }, []);

  const toggleTheme = () => {
    if (selectTheme.name === "light") setSelectTheme(themes.dark);
    else setSelectTheme(themes.light);
  };
  return (
    <Mainlayout>
      <div
        style={{
          backgroundColor: selectTheme.background,
        }}
      >
        <div
          style={{ backgroundColor: selectTheme.background, maxWidth: "700px" }}
          className="mx-auto"
        >
          <p
            className="display-4 text-center fst-italic "
            style={{ color: selectTheme.foreground }}
          >
            Minimal Todo List <span className="fst-normal">☑️</span>
          </p>
          <div className="d-flex align-items-center gap-2">
            <input
              className="form-control mb-1 fs-4"
              placeholder="insert todo here..."
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              value={todoInput}
              onKeyUp={(e) => {
                if (e.key !== "Enter") return;
                addTodos();
              }}
            />
            <button className="btn btn-dark" onClick={toggleTheme}>
              {selectTheme.name === "light" && <IconSunHigh />}
              {selectTheme.name === "dark" && <IconMoon />}
            </button>
          </div>
          <ThemeContext.Provider value={{ selectTheme }}>
            <div>
              {todos.map((todo, idx) => (
                <Todo
                  title={todo.title}
                  complete={todo.complete}
                  onDelete={() => deleteTodo(idx)}
                  onMark={() => markTodo(idx)}
                  onMoveUp={() => moveUp(idx)}
                  onMoveDown={() => moveDown(idx)}
                  key={idx}
                />
              ))}
            </div>
          </ThemeContext.Provider>

          <p className="text-center fs-4">
            <span className="text-primary">All ({todos.length}) </span>
            <span className="text-warning">
              Pending ({todos.filter((x) => x.complete === false).length}){" "}
            </span>
            <span className="text-success">
              Completed ({todos.filter((x) => x.complete === true).length})
            </span>
          </p>

          <p className="text-center mt-3 text-muted fst-italic">
            made by Kitanon Santabut 640610619
          </p>
        </div>
      </div>
    </Mainlayout>
  );
}
