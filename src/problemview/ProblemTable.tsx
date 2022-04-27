import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useState } from 'react';
import { PROBLEM_DATA } from '../common/constants';
import { Problem } from '../model/problem';

const columns: ColumnsType<Problem> = [
    {
        key: 'problemName',
        title: 'Problem',
        dataIndex: 'problemName',
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
        key: 'category',
        title: 'Category',
        dataIndex: 'category',
        render: tag => <Tag color='blue'>{tag}</Tag>
    },
];

const ProblemList = () => {
    let [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    return <Table<Problem>
        bordered
        dataSource={PROBLEM_DATA.neetcode150}
        columns={columns}
        size='small'
        pagination={false}
        showSorterTooltip
        rowSelection={{
            hideSelectAll: true,
            columnTitle: 'Completed',
            selectedRowKeys,
            onChange: (newSelectedRowKeys) => {
                setSelectedRowKeys(newSelectedRowKeys)
            },
        }}
    />
};

export default ProblemList;
