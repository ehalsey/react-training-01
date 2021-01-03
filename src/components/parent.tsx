import React from 'react';
import { Button } from 'antd';
import Child from './child'

export interface IParentProps {

}

export interface IParentState {
    count:number;
}

export default class ParentComponent extends React.Component<IParentProps,IParentState> {
    constructor(props:IParentProps) {
        super(props);
        this.state = {
            count:0
        }
    }

    doClick() {
        console.log('clicked' + this.state.count.toString());
        this.setState({count:this.state.count+1});
    }

    public render(): React.ReactElement<IParentProps> {
        return (
            <div>
                <Button> Working {this.state.count} </Button>
                <Child 
                    btnText={"Button Clicked " + this.state.count.toString()} 
                    clickHandler={() => this.doClick()}>
                </Child>
            </div>
        )
    }
}