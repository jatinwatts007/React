import React,{Component} from "react";

class counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count=0,
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment(){
        this .setState({count: this.state.count +1});
    }
    decrement(){
        this .setState({count: this.state.count - 1});
    }
    reset(){
        this .setState({count =0});
    }

    render(){
        const{ count } = this.state;

        return(
            <div className="Counter">
                <p className="count">{count}</p>
                <section className="controls">
                    <button onclick={this.increment}>Increment</button>
                    <button onclick={this.decrement}>Recrement</button>
                    <button onclick={this.reset}>Reset</button>
                </section>
            </div>
        );
    }
}
