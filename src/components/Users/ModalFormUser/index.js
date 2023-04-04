import React, { useEffect } from "react";
import { Input, Modal, Form, Select, InputNumber } from "antd";

const ModalFormUser = (props) => {
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

          <Form.Item name="email" label="Email" rules={[{ required: true, message: "Email!" }]}>
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone" rules={[{ required: true, message: "Phone!"}]}>
            <InputNumber  />
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ message: "Status!" }]}>
            <Select options={[{ value: 'On', label: 'On' }, { value: 'Off', label: 'Off' }]} />
          </Form.Item>

          <Form.Item name="avatar" label="Avatar" rules={[{ required: true, message: "Avatar!" }]}>
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </div>
  )
};
export default ModalFormUser;

