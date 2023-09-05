import {PickerView} from "antd-mobile";
import React from "react";
import {PickerColumn} from "antd-mobile/es/components/picker-view";

interface SelectProps {
    showOptions: PickerColumn[],//选择器列表数据
    value: Array<string | number | null>, //指定为多种类型的一种
    setValue: (param:Array<string | number | null>) => void,
}
const Select:React.FC<SelectProps> = (props) => {
    const {showOptions, value, setValue} = props;
    return <PickerView
        columns={showOptions as PickerColumn[]}
        value={value}
        onChange={val => {
            setValue(val)
        }}
    />
}

export default React.memo(Select);
