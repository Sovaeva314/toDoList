import { Component } from "react"
import check from './right.jpg'

export class Chores extends Component {
    state = {
        userInput: "",
        errandsList: []
    }

onChangeEvent(e) {
    this.setState ({userInput: e})
    }

addIssue(input) {
    if (input === '') {
        alert ('Please write down what is to be done today.')
    }
    else {
        let listArray = this.state.errandsList;
            listArray.push(input);
    
    this.setState({errandsList: listArray, userInput:''})

    console.log(listArray);
        }
    }

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteIssue() {
    let listArray = this.state.errandsList
    listArray = []
    this.setState ({errandsList: listArray})
}

onFormSubmit(e) {
    e.preventDefault ();
}

render() {
    return (
    <div>
        <form onSubmit={this.onFormSubmit}>
            
            <div className="container">
                <input type='text'
                placeholder='What are you up to today?'
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput} /> 
            </div>

            <div className="container">
                <button onClick={() => this.addIssue(this.state.userInput)} className='add'>Add it to the list</button>
            </div>

            <ul>
                {this.state.errandsList.map((issue, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={check} width='20px' alt='arrow' />
                    {issue}</li>
                ))}
            </ul>

            <div className="container">
                <button onClick={() => this.deleteIssue()} className='delete'>Empty the list! Well done!</button>
            </div>

        </form>

    </div>
    )
}
}

export default Chores;
