import React from 'react'
import { useEffect, useState } from "react"
import {SearchPanel} from "./search-panel"
import {List} from "./list"
import { cleanObject, useDebounce } from '../../utils'
import * as qs from 'qs'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {

  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: '',
    personId: ''
  });
  const debounceParam = useDebounce(param, 500);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async res => {
      if(res.ok) {
        setList(await res.json())
      }
    })
  }, [debounceParam])

  useEffect(()=>{
    console.log(1)
    fetch(`${apiUrl}/users`).then(async res=>{
      if(res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}/>
      <List users={users} list={list}/>
    </div>
  )
}