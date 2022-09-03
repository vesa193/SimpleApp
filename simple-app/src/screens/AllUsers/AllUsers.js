import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getAllUsers } from '../../lib/api';

const AllUsers = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState({});

    useEffect(() => {
        // get all users
        getAllUsers()
            .then(res => {
                setUsers(res?.data);
                
            })
            .catch(err => {
                console.log('err', err);
            });
    }, [])
    

    return (
        <div>
            <h4>All users page</h4>
            <br />
            <br />
            {users && Object.values(users)?.length > 0 ?
                <ul>
                 {Object.values(users)?.map(user => {
                    const { _id, username } = user;

                    return (
                        <React.Fragment key={_id}>
                            <li>{username}</li>
                            <br />
                        </React.Fragment>
                    );
                })}
            </ul> : null}
        </div>
    );
};

export default AllUsers;