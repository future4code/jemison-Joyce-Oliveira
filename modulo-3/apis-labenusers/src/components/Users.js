import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAddPlay, ButtonDeletePlay, Display, FormPlay, IconePlay, ItemPlayList } from "../styled";

function Users() {
    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const allUsers = users.map((users, index) => {
        return (
            <ItemUser key={index}>
                <IconeUser src='https://cdn-icons-png.flaticon.com/512/7324/7324690.png' />
                {users.name}
            </ItemUser>
        )
    })


    useEffect(() => {
        getAllUsers()
    }, [])



    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'joyce-oliveira-jemison'
        }
    }

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => { setUsers(response.data.result.list) })
        .catch((error) => { console.log(error.response) })
    }


    const body = {
        "name": input
    }

    const postUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Playlist cadastrada com sucesso!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente :(")
        })

        setInput("")
    }

    
    const deleteUser = (e) => {
        e.preventDefault();

        const delPlaylist = Users.filter((playlist) => Users.name === input)

        axios.delete(url + "/" + delPlaylist[0].id, serviceHeaders)
        .then((response) => {
            alert("Usuario deletado com sucesso!")
            getAllUsers();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setInput("")
    }

    return (
        <Display>
            {}
            <ul>
                {allUsers}
            </ul>
            {}
            <FormPlay>
                <input type="text" value={input} onChange={handleInput} />
                <ButtonAddPlay onClick={postUser}>
                    Adicionar
                </ButtonAddPlay>
                <ButtonDeletePlay onClick={deleteUser}>
                    Excluir
                </ButtonDeletePlay>
            </FormPlay>
        </Display>
    )
}

export default Users;