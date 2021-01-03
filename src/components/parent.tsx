import React from 'react';
import { Button } from 'antd';
import Child from './child'

export interface IParentProps {

}

export default class ParentComponent extends React.Component<IParentProps, {}> {
    constructor(props:IParentProps) {
        super(props);
        console.log("here");
    }
    public render(): React.ReactElement<IParentProps> {
        return (
            <div>
                <Button> Working </Button>
                <Child clickHandler={()=>console.log('hello')}></Child>
            </div>
        )
    }
}