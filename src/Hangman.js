import React, {Component} from "react";
import "./Hangman.css";
import img from "./images/hang.jpg";
import ButtonComponent from "./ButtonComponent";
import {randomWord} from "./words";

class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: new Set(),
            answer: randomWord()
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    guessWord() {
        let splittedWord = this.state.answer.split("");
        return splittedWord.map((ltr) => "_");
    }
 
    generateButtons() {
        let arrLetter ="abcdefghljklmnoprqstuvwxyzåäö".split("");
        return arrLetter.map((ltr) => 
            <ButtonComponent isClicked={this.handleOnClick}
            key={ltr}
            ltr={ltr}
            isDisabled={this.state.isDisabled.has(ltr)}
            />
        );
    }

    handleOnClick(e) {
        let ltrValue = e.target.innerText;
        this.setState((st) => ({
            isDisabled: st.isDisabled.add(ltrValue)
        }));
    }

    handleReset() {
        this.setState((st) => ({
            isDisabled: new Set()
        }));
    }

    render() {
        return(
            <div className="Hangman">
            <h1>Hangman</h1>
            <p>Syftet med spelet är att gissa en .....</p>

            <img src={img} alt={"image"}></img>

            <p className="hangman-word">{this.guessWord()}</p>

            <p>Antal gisningar: 0</p>
            
            <div className="hangman-btns">{this.generateButtons()}</div>
            <br/>

            <button onClick={this.handleReset} className="resetBtn">Återställ</button>

            </div>
        );
    }
}
export default Hangman;
