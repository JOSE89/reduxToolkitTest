import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../store/slices/users/actions/userActions';

const UserList = () => {

    const dispath = useDispatch();
    const { list } = useSelector(state => state.users)
    useEffect(() => {
        dispath(fetchAllUsers());
    }, [dispath]);

    return (
        <div className='container'>
            <div className='row'>
                {
                    list?.map((user) => (
                        <div key={user?.id} className='col-md-3'>
                            <div className='card'>
                                <img src={user.avatar} alt='avatar'></img>
                                <div className='card-body'>
                                    <p className='card-text'>{user.mail}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserList
