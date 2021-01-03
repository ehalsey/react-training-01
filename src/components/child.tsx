import React from 'react';
import { Button } from 'antd';


export interface IChildProps {
}

export default class ParentComponent extends React.Component<IChildProps, {}> {
    public render(): React.ReactElement<IChildProps> {
        return (
            <div>
                <Button> Working </Button>
            </div>
        )
    }
}