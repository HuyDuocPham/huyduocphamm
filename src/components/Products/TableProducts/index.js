import React from "react";
import { Button, Table } from "antd";
import { Actions, Image } from "./styles";
const TableProducts = (props) => {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (_, item) => {
                return (
                    <div >
                        <Image src={item.avatar} />
                    </div>
                )
            }
        },
        {
            title: "",
            dataIndex: "actions",
            render: (text, item) => {
                return (
                    <Actions>
                        <Button
                            disabled={props.itemLoading}
                            onClick={() => {
                                props.onEdit(item.id)
                            }}>Edit</Button>
                        <Button
                            disabled={props.itemLoading}
                            onClick={() => {
                                props.onDelete(item.id)
                            }}>Delete</Button>
                    </Actions>
                )
            }
        }
    ];

    return (
        <div>
            <Table
                dataSource={props.dataSource}
                loading={props.loading}
                columns={columns} />
        </div>
    )
};
export default TableProducts;