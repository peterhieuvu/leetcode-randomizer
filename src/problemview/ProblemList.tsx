import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import { PROBLEM_DATA } from '../common/constants';
import { NeetcodeProblem } from '../model/neetcodeproblem';

const columns: ColumnsType<NeetcodeProblem> = [
    {
        key: 'problem',
        title: 'Problem',
        dataIndex: 'problem',
        render: (text, record) => (
            <a href={record.link} rel='noopener noreferrer'>{text}</a>
        ),
    },
    {
        key: 'difficulty',
        title: 'Difficulty',
        dataIndex: 'difficulty',
    },
    {
        key: 'pattern',
        title: 'Pattern',
        dataIndex: 'pattern',
        render: (tag) => <Tag color='blue'>{tag}</Tag>,
    },
    {
        key: 'videoSolution',
        title: 'Video Solution',
        dataIndex: 'videoSolution',
        render: (link) => (
            <Tag color='rgb(69, 69, 69)'>
                <a href={link}>Video Solution Link</a>
            </Tag>
        ),
    },
    {
        key: 'code',
        title: 'Code',
        dataIndex: '',
        render: (_, record) => (
            <>
                {record.python && (
                    <Tag color='green'>
                        <a href={record.python}>Python</a>
                    </Tag>
                )}
                {record.java && (
                    <Tag color='yellow'>
                        <a href={record.java}>Java</a>
                    </Tag>
                )}
                {record.javascript && (
                    <Tag color='red'>
                        <a href={record.javascript}>Javascript</a>
                    </Tag>
                )}
                {record.cpp && (
                    <Tag color='orange'>
                        <a href={record.cpp}>C++</a>
                    </Tag>
                )}
            </>
        ),
    },
];

interface ProblemListProps {
    data?: NeetcodeProblem[],
    onSelectionChange?: (selectedRows: NeetcodeProblem[]) => void,
}

const ProblemList: React.FC<ProblemListProps> = ({ data, onSelectionChange }) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    return (
        <Table<NeetcodeProblem>
            bordered
            dataSource={data}
            columns={columns}
            size='small'
            pagination={false}
            showSorterTooltip
            rowSelection={{
                hideSelectAll: true,
                columnTitle: 'Completed',
                selectedRowKeys,
                onChange: (newSelectedRowKeys, selectedRows) => {
                    setSelectedRowKeys(newSelectedRowKeys);
                    onSelectionChange?.(selectedRows);
                },
            }}
        />
    );
};

ProblemList.defaultProps = {
    data: PROBLEM_DATA.neetcoderaw,
    onSelectionChange: undefined,
};

export default ProblemList;
