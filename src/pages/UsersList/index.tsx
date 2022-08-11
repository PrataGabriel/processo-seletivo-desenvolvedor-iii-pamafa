import {useEffect, useState} from 'react'
import InfoUser from '../../components/InfoUser'
import {IUsers} from '../../types/users'
import style from './style.module.css'

function UsersList()
{
    const [users, setUsers] = useState<IUsers[] | []>([])

    useEffect(() =>
    {
        fetch(`https://fakerapi.it/api/v1/users?_quantity=20`)
        .then((res) => res.json())
        .then(res =>
        {
            if(res && res.code === 200)
            {
                setUsers(res.data.map((data: IUsers) =>
                {
                    return {
                        uuid: data.uuid,
                        email: data.email,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        website: data.website,
                        username: data.username
                    }
                }))
            }
        })
    }, [])
    
    return (
        <div className={style["a-list-users"]}>
            <div className={style["list-users"]}>
                {users.map(user => <InfoUser user={user} />)}
            </div>
        </div>
    )
}

export default UsersList