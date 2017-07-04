import React, { Component } from 'react';
import $ from 'jquery';
import {PokerHand} from './PokerHand';
import Deck from '../utilityClass/deck';
import Buttons from './Buttons';
import ThePot from './ThePot'
var cards = new Deck();
class PokerTable extends Component{
	constructor(props){
		super(props);
		this.state = {
			dealersHand: ['deck', 'deck'],
			playerHand: ['deck', 'deck'],
			communityCards: ['deck', 'deck', 'deck', 'deck'],
			wager: 0
		}
		this.prepDeck = this.prepDeck.bind(this);
		this.playerBet = this.playerBet.bind(this);
		this.draw = this.draw.bind(this);
	}
	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
		// The deck is ready for a nre hand!
		// Set up the playershand and the dealersHand
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();

		var playerStartingHand = [card1, card3];
		var dealerStartingHand = [card2, card4];
		this.setState({
			dealersHand: dealerStartingHand,
			playerHand: playerStartingHand
		})
	}
	playerBet(amount){
		var newWager = this.state.wager + amount;
		this.setState({
			wager: newWager
		})
		this.draw()
		this.checkHands(this.state.playerHand)
	}
	checkHands(hand){
		$.ajax({
			method: "POST",
			url: "http://localhost:5000/hand-checker",
			data: {hand: hand},
			success: (response)=>{
				console.log(response)
			}
		})
		$.ajax({
			method: "POST",
			url: "http://localhost:3000/hand-checker",
			data: {hand: hand},
			success: (response)=>{
				console.log(response)
			}
		})
	}
	draw(){
		var communityNewHand = this.state.communityCards;
		communityNewHand.push(cards.deck.shift());
		this.setState({
			communityCards: communityNewHand
		})
		if(this.state.gameOver){

		}
	}
	render(){
		return (
			<div className="the-table col-sm-12">
				<ThePot wager={this.state.wager}/>
				<PokerHand cards={this.state.dealersHand}/> {/* The Computer Hand */}
				<PokerHand cards={this.state.communityCards}/>{/* The Community Cards */}
				<PokerHand cards={this.state.playerHand}/>{/* The Player Hand */}
				<Buttons deal={this.prepDeck} draw={this.draw} bet={this.playerBet}/>
			</div>
		);
	}
};

export { PokerTable }