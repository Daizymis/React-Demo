import React, {useState} from "react"
import Filter from "./index";
import {Button, Space, Tag} from "antd-mobile";

type person = {
    id: number | string,
    name: string
}

const data: person[] = [
    {id: 1, name: "王刚"},
    {id: 2, name: "肖军"},
    {id: 3, name: "林一夏"},
    {id: 4, name: "卡卡"},
    {id: 5, name: "菲菲"},
    {id: 6, name: ""},
];
const Demo: React.FC = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedNodes, setSelectedNodes] = useState<Array<person>>([]);
    const [defaultValue, setDefaultValue] = useState<person | null>(null);
    const openPicker = () => {
        setShowPicker(true);
    };
    const confirm = (item: (person & { id: number, name: string })) => {
        setDefaultValue(item)
        setShowPicker(false)
        if (selectedNodes.some(eml => eml.id === item.id)) return;
        selectedNodes.push(item);
        setSelectedNodes(selectedNodes);
    };
    return (
        <React.Fragment>
            <Button color='primary' fill='solid' onClick={() => openPicker()}>
                show selector
            </Button>
            <div>
                已选择
                <Space direction='vertical'>
                    {selectedNodes.map((item, index) => (
                        <Tag
                            key={item.id}
                            color='default'
                            className="share-name"
                        >
                            {item.name}
                        </Tag>
                    ))}
                </Space>
            </div>
            {showPicker &&
            <Filter setShowPicker={setShowPicker} placeholder={'请输入'} filterable={true} defaultValue={defaultValue}
                    label="name" search-value="item" confirm={confirm} showPicker={showPicker}>
                {
                    data.map(item => ({
                        key: item.id,
                        ...item,
                        label: item.name,
                        value: item
                    }))
                }
            </Filter>}
        </React.Fragment>
    )
}
export default Demo
