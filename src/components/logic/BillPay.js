import React, {Component} from 'react'

export default class extends Component {
    state = {
        bill: '',
        people: '',
        tip: ''
    };

    render() {
        const SubmitHandler = (event) => {
            event.preventDefault();
            alert(`You're tipping $${TipAmount()} which brings the total to $${BillAmount()}. This means each person pays $${AmountToPay()}`)
        };
        let bill = parseFloat(this.state.bill, 10);
        let people = parseInt(this.state.people, 10);
        let tip = parseFloat((this.state.tip/100), 10);


        const TipAmount = () => {
            return parseFloat((bill * tip).toFixed(2))
        };

        const BillAmount = () => {
            return parseFloat((bill + TipAmount()).toFixed(2))
        };

        const AmountToPay = () => {
            return parseFloat((BillAmount() / people).toFixed(2))
        };
        return (
            <div>
                <form onSubmit={SubmitHandler}>
                    <h3>Welcome to Basic Split a Bill</h3>
                    <br/>
                    <h4>How much is the bill?</h4>
                    <input type="number" min={0} step={0.01} placeholder="$20" required onChange={e => {
                        this.setState({bill: e.target.value})
                    }}/>
                    <br/>
                    <h4>How many people are splitting the bill?</h4>
                    <input type="number" min={0} placeholder="2" required onChange={e => {
                        this.setState({people: e.target.value})
                    }}/>
                    <br/>
                    <h4>What percent tip are you giving?</h4>
                    <input type="number" min={0} placeholder="20%" required onChange={e => {
                        this.setState({tip: e.target.value})
                    }}/>
                    <br/>
                    <input type="submit" value="Calculate!"/>
                </form>
            </div>
        )
    }
}