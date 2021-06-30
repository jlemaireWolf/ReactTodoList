/*** importer librairie Component */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoList.css";

/** composant de type class */
class TodoList extends Component {
  /***construire un composant avec des states il faut declarer constructor***/
  constructor() {
    /** declarer la methode super obligatoire sinon constructor ne fonctionne pas */
    super();
    this.state = {
      /**valeur du champ text**/
      userInput: "",
      items: [],
    };
  }

  /**les methodes** */
  /** function pour updater le state , ici userInput */
  updateValueEnter(event) {
    /***Set State pour changer le state car immutable */
    this.setState({
      userInput: event.target.value,
    });
  }
  addTodo(event) {
    /**pour eviter le reload de la page car formulaire  */
    event.preventDefault();
    this.setState({
      /**champ input vide apres sun ajout */
      userInput: "",
      /***muter le tableau , faire une copie, pour inserer un nouvelle item, methode es6 */
      items: [...this.state.items, this.state.userInput],
    });
  }

  renderTodo() {
    //this.state.items.map(function(item){})
    return this.state.items.map((item) => {
      return (
        <li key={item}>
          {item}
          <button
            className="btn btn-outline-primary"
            onClick={this.deleteTodo.bind(this)}
          >
            X
          </button>
        </li>
      );
    });
  }

  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.parentNode.firstChild.nodeValue);
    console.log(event.target.parentNode.firstChild.nodeValue)
    /***function js pour supp un element */
    array.splice(index, 1);
    /*** mon state items est egale à mon array */
    this.setState({
      items: array,
    });
  }

  /***render pour le rendu*** */
  render() {
    return (
      <div className="container">
        <div className="">
          <div className="card">
            <div className="col-sm">
              <h1 align="center">ma todolist</h1>
              <form className="col-8 mx-auto">
                <label>Mes tâche: </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="exampleFormControlInput1"
                    value={this.state.userInput}
                    type="text"
                    placeholder="renseigner une tache"
                    onChange={this.updateValueEnter.bind(this)}
                  ></input>
                  <button
                    className={
                      this.state.userInput == ""
                        ? "btn btn-outline-secondary"
                        : "btn btn-outline-primary"
                    }
                    onClick={this.addTodo.bind(this)}
                  >
                    ajouter
                  </button>
                </div>
              </form>
              <div className="row">
                <ul className="col-8 mx-auto">{this.renderTodo()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/****bind(this) pour la reference à cette element à ce component */
/*** exporter le composant  pour l'appeller ailleur */
export default TodoList;
