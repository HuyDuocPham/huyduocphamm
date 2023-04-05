import React, { useState, useEffect } from "react";
import ModalFormUser from "./ModalFormUser";
import TableUsers from './TableUsers'
import { ButtonCreate, Header } from "./styles";
import axios from "axios";
import { Modal } from "antd";
import { useLocation } from "react-router-dom";
import SearchBox from "../SearchBox";

const DEFAULT_USER = { name: "", email: "", phone: "", status: "", avatar: "" }

const Users = () => {
  const [formData, setFormData] = useState(DEFAULT_USER)
  const [dataSource, setDataSource] = useState([])
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [tableLoading, setTableLoading] = useState(false)  
  const [submitLoading, setSubmitLoading] = useState(false) 
  const [itemLoading, setItemLoading] = useState(false)
  const location = useLocation();

  useEffect(() => {
    fetchData();
  }, [location]) //new


  const onCreate = () => {
    setFormData(DEFAULT_USER)
    setOpen(true)
  }
  const onEdit = (id) => {
    axios.get(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-users/${id}`).then((res) => {
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
        axios.delete(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-users/${id}`).then((res) => {
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
      axios.put(`https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-users/${id}`,data).then((res) => {
        setSubmitLoading(false)
        setFormData(DEFAULT_USER)
        setOpen(false)
        fetchData();
      })
    }
    else {
      axios.post('https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-users', data).then((res) => {
        setSubmitLoading(false)
        setFormData(DEFAULT_USER)
        setOpen(false)
        fetchData(); 
      })
    }
  }


  // const searchedDataSource = useMemo(() => {
  //   if (keyword) {
  //     return dataSource.filter((item) => {
  //       return item.name.includes(keyword) || item.phone.includes(keyword) || item.status.includes(keyword) || item.email.includes(keyword);
  //     });
  //   }

  //   return dataSource;
  // }, [keyword, dataSource]);


  const fetchData = () => { 
    const searchParams =new URLSearchParams(location.search) //new
    const baseURL = "https://6401dccaab6b7399d0ae5ae3.mockapi.io/huyduocphamm-users"
    const keyword = searchParams.has("keyword") ? searchParams.get("keyword") : "";
    const page = searchParams.has("page") ? searchParams.get("page") : 1;
    const limit = searchParams.has("litmit") ? searchParams.get("limit") : 10;

    setTableLoading(true)

    axios.get(`${baseURL}?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
      setDataSource(res.data)
      setTableLoading(false)
    })
  }


  return (
    <div>
      <Header>
        <SearchBox value={keyword} onChange={onSearch} />
        <ButtonCreate onClick={onCreate} >New User</ButtonCreate>
      </Header>
      <ModalFormUser open={open} setOpen={setOpen} onChange={onChange} onSubmit={onSubmit} formData={formData} loading={submitLoading}
      />
      <TableUsers dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} loading={tableLoading} itemLoading={itemLoading}  />
    </div>
  )
};
export default Users;
