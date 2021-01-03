import React from 'react';
import { Button, Checkbox } from 'antd';
import Child from './child'
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

export interface IParentProps {

}

export interface IParentState {
    count: number;
    editing: boolean;
}

export default class ParentComponent extends React.Component<IParentProps, IParentState> {
    constructor(props: IParentProps) {
        super(props);
        this.state = {
            count: 0,
            editing: false,
        }
    }

    doClick() {
        console.log('clicked' + this.state.count.toString());
        this.setState({ count: this.state.count + 1 });
    }

    chkChanged(e:CheckboxChangeEvent) {
        this.setState({ editing : !this.state.editing });
    }

    public render(): React.ReactElement<IParentProps> {
        return (
            <div>
                <Checkbox 
                    value={this.state.editing} 
                    onChange={(e:CheckboxChangeEvent)=>this.chkChanged(e)}
                    >Editing</Checkbox>
                <Button> Working {this.state.count} </Button>
                <Child
                    editing={this.state.editing} 
                    btnText={"Button Clicked " + this.state.count.toString()}
                    clickHandler={() => this.doClick()}>
                </Child>
            </div>
        )
    }
}