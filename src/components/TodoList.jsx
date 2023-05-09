import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [
        { id: 1, name: "Mengerjakan Post Test", completed: false },
        { id: 2, name: "Mengerjakan Pre Test", completed: true },
        { id: 3, name: "Menghadiri Bootcamp PZ", completed: false },
      ],
    };
  }
  handleClick = (id, index) => {
    this.setState((prevState) => ({
      itemList: prevState.task.map((t) =>
        t.id === id
          ? Object.assign(t, {
              completed: !this.state.task[index].completed.value,
            })
          : t
      ),
    }));
  };
  render() {
    const tasks = this.state.task.map((t, index) => {
      return (
        <li key={t.id} onClick={() => this.handleClick(t.id, index)}>
          {t.name} : {t.completed ? "Sudah Selesai" : "Belum Selesai"}
        </li>
      );
    });
    return (
      <div>
        <ul>{tasks}</ul>
      </div>
    );
  }
}
