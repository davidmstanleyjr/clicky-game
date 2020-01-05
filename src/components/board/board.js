import React, { Component } from "react";

import FadeIn from "../transitions/fade-in";
import CharacterBox from "./characterBox";
import ScoreDisplay from "./scoredisplay";

//this is my shuffle array.
const shuffleArray = (arr) => arr.map((a) => [ Math.random(), a ]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);

const initialChars = [
	{
		name: "Arya Stark",
		img: "img/characterimages/arya-stark.gif",
		clicked: false
	},
	{
		name: "Bran Stark",
		img: "img/characterimages/bran-stark.gif",
		clicked: false
	},
	{
		name: "Cersei Lannister",
		img: "img/characterimages/cersei-lannister.gif",
		clicked: false
	},
	{
		name: "Daenerys Targaryen",
		img: "img/characterimages/daenerys-targaryen.gif",
		clicked: false
	},
	{
		name: "Hodor",
		img: "img/characterimages/hodor.gif",
		clicked: false
	},
	{
		name: "Jaime Lannister",
		img: "img/characterimages/jaime-lannister.gif",
		clicked: false
	},
	{
		name: "Joffrey Baratheon",
		img: "img/characterimages/joffrey-baratheon.gif",
		clicked: false
	},
	{
		name: "Jon Snow",
		img: "img/characterimages/jon-snow.gif",
		clicked: false
	},
	{
		name: "Melisandre",
		img: "img/characterimages/melisandre.gif",
		clicked: false
	},
	{
		name: "Ned Stark",
		img: "img/characterimages/ned-stark.gif",
		clicked: false
	},
	{
		name: "The Night King",
		img: "img/characterimages/night-king.gif",
		clicked: false
	},
	{
		name: "Robb Stark",
		img: "img/characterimages/robb-stark.gif",
		clicked: false
	},
	{
		name: "Sansa Stark",
		img: "img/characterimages/sansa-stark.gif",
		clicked: false
	},
	{
		name: "The Hound",
		img: "img/characterimages/the-hound.gif",
		clicked: false
	},
	{
		name: "Tyrion Lannister",
		img: "img/characterimages/tyrion-lannister.gif",
		clicked: false
	}
];

export default class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				score: 0
			},
			characters: shuffleArray(initialChars)
		};
	}

	//this begins the shuffle when the character is clicked.
	onCharacterClick = (index) => {
		if (!this.state.characters[index].clicked) {
			this.setState({
				characters: shuffleArray(
					this.state.characters.map((character, current) => {
						return current === index ? { ...character, clicked: true } : character;
					})
				),
				user: {
					...this.state.user,
					score: this.state.user.score + 1
				}
			});
		} else {
			this.setState({
				characters: shuffleArray(
					this.state.characters.map((character) => {
						return { ...character, clicked: false };
					})
				),
				user: {
					...this.state.user,
					score: 0
				}
			});
		}
	};

	render() {
		return (
			<div className="Board">
				<FadeIn in={true} duration={450} length={"30px"} direction={"bottom"} delay={"1s"}>
					<h4>
						Try to click on every Game of Thrones character once. Once you click on a character, the grid
						will shuffle.<br />Try not to click the same Game of Thrones character twice or the game will
						start over. Have fun!
					</h4>
				</FadeIn>
				<FadeIn in={true} duration={500} direction={"bottom"} delay={"1.5s"}>
					<ScoreDisplay score={this.state.user.score} />
				</FadeIn>
				<CharacterBox characters={this.state.characters} onCharacterClick={this.onCharacterClick} />
			</div>
		);
	}
}
