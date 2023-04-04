import React, { useEffect } from "react";
import { Input, Modal, Form, Select, InputNumber } from "antd";
import TextArea from "antd/es/input/TextArea";

const ModalFormProduct = (props) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (!props.open) {
      form.resetFields()
    }
  }, [props.open])

  useEffect(() => {
    if (props.open && props.formData.id) {
      form.setFieldsValue(props.formData)
    }
  }, [props.open, props.formData])

  const onSubmit = async () => {
    const values = await form.validateFields()
    props.onSubmit(props.formData.id, values)
  }

  const onCancel = () => {
    props.setOpen(false)
  }

  return (
    <div>

      <Modal open={props.open} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}  >
        <Form form={form} layout="vertical" >

          <Form.Item name="name" label="Name" rules={[{ required: true, message: "Name!" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="code" label="Code" rules={[{ required: true, message: "Code!" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price" rules={[{ required: true, message: "Price!"}]}>
            <InputNumber  />
          </Form.Item>

          <Form.Item name="description" label="Description" rules={[{ message: "Description!" }]}>
            <TextArea />
          </Form.Item>

          <Form.Item name="avatar" label="Avatar" rules={[{ required: true, message: "Avatar!" }]}>
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </div>
  )
};
export default ModalFormProduct;

