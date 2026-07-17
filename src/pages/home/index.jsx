import { useState, useEffect, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const response = await api.get('/usuarios')
    setUsers(response.data)
  }


  async function createUsers() {
    const response = await api.post('/usuarios', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    })
    setUsers([...users, response.data])
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }


  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    setUsers(users.filter(user => user.id !== id))

    getUsers()
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type="text" placeholder="Nome" ref={inputName} />
        <input name='idade' type="number" placeholder="Idade" ref={inputAge} />
        <input name='email' type="email" placeholder="Email" ref={inputEmail} />
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} alt="Excluir" />
          </button>
        </div>
      ))}


    </div>
  )
}

export default Home
