import React, { useEffect, useMemo, useState} from "react";
import {Button, SearchBar, Popup} from "antd-mobile";
import "./index.scss";
import Select from "./select";
import {PickerColumn} from "antd-mobile/es/components/picker-view";

interface FilterProps {

    filterable?: boolean;//数据过滤标识
    remote?: boolean; //远程搜索标识，默认为false
    search?: (params:string) => void, //远程搜索事件函数
    showPicker: boolean; //弹窗展示
    defaultValue: any, //指定为多种类型的一种
    placeholder?: string,
    setShowPicker: (flag:boolean) => void,
    children?: Array<string | { label: string, value: any }>,
    confirm: Function,
    label: string
}
const Filter: React.FC<FilterProps> = (props= {
    filterable: false,
    remote: false,
    showPicker: true,
    defaultValue: null,
    setShowPicker: function (flag: boolean): void { },
    children: [],
    confirm: function (item: object): void {},
    label: "",
    placeholder: '请选择'
}) => {
    const {
        placeholder,
        filterable,
        remote,
        defaultValue,
        showPicker = true,
        setShowPicker,
    } = props;
    const [searchText, setSearchText] = useState("");
    const [value, setValue] = useState<Array<string | number | null>>([]);

    useEffect(() => {
        setValue([defaultValue]);
    }, [defaultValue]);
    /**
     * 根据是否可过滤来获取下拉列表
     * 依据为输入框是否有值
     */
    const showOptions: PickerColumn[]= useMemo(() => {
        if (!searchText) {
            return [props.children?.slice(0)].filter(Boolean);
        } else if (filterable && !remote) {
            return [props.children?.filter((item: any) => item?.label?.indexOf(searchText) > -1)].filter(Boolean) || [];
        }
        return [];
    }, [props.children, searchText])  as PickerColumn[];
    /**
     * 当输入框值发生改变时，判断是远程搜索，还是内部过滤
     */
    const searchValue = (val:string) => {
        setSearchText(val)
        if (remote) {
            props.search && props.search(val);
        }
    };
    /**
     * 提交值：选了数据才触发事件，否则仅关闭弹出层
     */
    const onConfirm = () => {
        if (value) {
            props.confirm(value[0]);//由于value是数组，所以默认取索引0的值
            setSearchText("");
        }
        setShowPicker(false);
    };
    return (
        <>
            <Popup
                visible={showPicker}
                position="bottom"
                bodyStyle={{width: "100vw", height: "50vw"}}
            >
                <div className="flex-side">
                    <Button
                        color="primary"
                        fill="none"
                        onClick={() => setShowPicker(false)}
                        style={{
                            '--text-color': '#969799'
                        }}
                    >
                        取消
                    </Button>
                    <Button color="primary" fill="none" onClick={() => onConfirm()}
                            style={{
                                '--text-color': '#969799'
                            }}>
                        确定
                    </Button>
                </div>
                {(remote || filterable) && (
                    <SearchBar
                        placeholder={placeholder}
                        value={searchText}
                        onChange={(val) => searchValue(val)}
                        className="filter-input"
                        clearable
                    />
                )}
                <Select
                    showOptions={showOptions}
                    setValue={setValue}
                    value={value}
                ></Select>
            </Popup>
        </>
    );
}
export default React.memo(Filter);
