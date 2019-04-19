import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Part = (props) => (
    <p>
        {props.part} {props.exercise}
    </p>
)

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    let sum = 0;
    props.parts.forEach(element => {
        sum += element.exercises;
    });
    return (
        <p>yhteensä {sum} tehtävää</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
          },
          {
            name: 'Komponenttien tila',
            exercises: 14
          }
        ]
      }
  

  return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
