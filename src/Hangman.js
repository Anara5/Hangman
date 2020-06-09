import React, {Component} from "react";
import "./Hangman.css";
import ButtonComponent from "./ButtonComponent";
import {randomWord} from "./words";
import img from './images/hang.jpg';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [img, img1, img2, img3, img4, img5, img6]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            answer: randomWord(),
            isDisabled: new Set(),
            guessed: new Set([]),
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    guessWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }
 
    generateButtons() {
        let arrLetter ="abcdefghijklmnoprqstuvwxyzåäö".split("");
        return arrLetter.map((ltr) => (
            <ButtonComponent
            isClicked={this.handleOnClick}
            key={ltr}
            ltr={ltr}
            isDisabled={this.state.guessed.has(ltr)} />
        ));
    }

    handleOnClick(e) {
        let ltr = e.target.innerText;
        this.setState((st) => ({
            isDisabled: st.isDisabled.add(ltr),
            guessed: st.guessed.add(ltr),
            mistake: st.mistake + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    handleReset() {
        this.setState((st) => ({
            mistake: 0,
            answer: randomWord(),
            isDisabled: new Set(),
            guessed: new Set([]),
        }));
    }
    
    render() {
        const isWinner = this.guessWord().join("") === this.state.answer;
        const gameOver = this.state.mistake >= this.props.maxWrong;
        
        let gameStat = this.generateButtons();
        if (isWinner) {
            gameStat= "Grattis du har gissat korrekt!";
        }
        if (gameOver) {
           gameStat= "Du har förlorat";
        }

        return(
            <div className="Hangman">
            <h1>Hangman</h1>
            <p>Syftet med spelet är att gissa ett ord.</p>

            <img src={this.props.images[this.state.mistake]} alt={"images"}></img>

            <p className="hangman-word">{!gameOver ? this.guessWord() : this.state.answer}</p>

            <div>Antal fel: {this.state.mistake} av {this.props.maxWrong}</div>

            <div>{this.gameStat}</div>
            
            <div className="hangman-btns"><p>{gameStat}</p></div>
            <br/>
  
            <button onClick={this.handleReset} className="resetBtn">Återställ</button>

            </div>
        );
    }
}
export default Hangman;