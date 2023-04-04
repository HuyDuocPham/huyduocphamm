import React, { useState, useMemo, useEffect } from "react";
import ModalFormProduct from "./ModalFormProduct";
import TableProducts from './TableProducts'
import { ButtonCreate, Header, InputSearch } from "./styles";
import axios from "axios";
import { Modal } from "antd";

const DEFAULT_PRODUCT = { name: "", email: "", phone: "", status: "", avatar: "" }

const Users = () => {
  const [formData, setFormData] = useState(DEFAULT_PRODUCT)
  const [dataSource, setDataSource] = useState([])
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [tableLoading, setTableLoading] = useState(false)  
  const [submitLoading, setSubmitLoading] = useState(false) 
  const [itemLoading, setItemLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, [])


  const onCreate = () => {
    setFormData(DEFAULT_PRODUCT)
    setOpen(true)
  }
  const onEdit = (id) => {
    axios.get(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-products/${id}`).then((res) => {
      setFormData(res.data)
      setOpen(true)
    })
  }

  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu sẽ bị mất vĩnh viễn.",
      onOk() {
        setItemLoading(true)
        axios.delete(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-products/${id}`).then((res) => {
          setFormData(res.data)
          fetchData()
        })
      },
    });
  };

  const onSearch = (e) => {
    setKeyword(e.target.value)
  }

  const onChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (id, data) => {
    setSubmitLoading(true)
    if (id) {
      axios.put(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-products/${id}`,data).then((res) => {
        setSubmitLoading(false)
        setFormData(DEFAULT_PRODUCT)
        setOpen(false)
        fetchData();
      })
    }
    else {
      axios.post('https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-products', data).then((res) => {
        setSubmitLoading(false)
        setFormData(DEFAULT_PRODUCT)
        setOpen(false)
        fetchData(); 
      })
    }
  }


  const searchedDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.name.includes(keyword) || item.code.includes(keyword) || item.description.includes(keyword);
      });
    }

    return dataSource;
  }, [keyword, dataSource]);


  const fetchData = () => { 
    setTableLoading(true)
    axios.get('https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-products').then((res) => {
      setDataSource(res.data)
      setTableLoading(false)
    })
  }


  return (
    <div>
      <Header>
        <InputSearch value={keyword} onChange={onSearch} />
        <ButtonCreate onClick={onCreate} >New Product</ButtonCreate>
      </Header>
      <ModalFormProduct open={open} setOpen={setOpen} onChange={onChange} onSubmit={onSubmit} formData={formData} loading={submitLoading}
      />
      <TableProducts dataSource={searchedDataSource} onEdit={onEdit} onDelete={onDelete} loading={tableLoading} itemLoading={itemLoading}  />
    </div>
  )
};
export default Users;
