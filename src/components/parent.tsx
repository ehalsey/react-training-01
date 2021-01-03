import React from 'react';
import { Button } from 'antd';

export interface IParentProps {
}

export default class ParentComponent extends React.Component<IParentProps, {}> {
    public render(): React.ReactElement<IParentProps> {
        return (
            <div>
                <Button> Working </Button>
            </div>
        )
    }
}