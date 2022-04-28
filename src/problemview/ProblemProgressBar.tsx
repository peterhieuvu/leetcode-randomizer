import { Tag } from 'antd';
import React from 'react';

interface ProblemProgressBarProps {
    completed: number,
    total: number,
}

const ProblemProgressBar: React.FC<ProblemProgressBarProps> = ({ completed, total }) => (
    <Tag>
        {completed}
        /
        {total}
    </Tag>
);

export default ProblemProgressBar;
