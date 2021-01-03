import React from 'react';
import { Button, Input } from 'antd';

export interface IChildProps {
    clickHandler: () => void;
    btnText: string;
    editing: boolean;
}

export default class ChildComponent extends React.Component<IChildProps, {}> {
    public render(): React.ReactElement<IChildProps> {
        return (
            <div>
                <Button onClick={this.props.clickHandler}> {this.props.btnText} </Button>
                <Input readOnly={!this.props.editing} placeholder="working"></Input>
            </div>
        )
    }
}