import React, { Component } from 'react';
// import FirstComponent from './components/learning-examples/FirstComponent.jsx';
// import SecondComponent from './components/learning-examples/SecondComponent.jsx';
// import ThirdComponent from './components/learning-examples/ThirdComponent.jsx';
// import Counter, {CounterButton} from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp.jsx'
import './App.css';
import './bootstrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />

        {/* <Counter></Counter> */}
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         Hello World
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

export default App;
