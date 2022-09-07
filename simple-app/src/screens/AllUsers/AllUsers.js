import { List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/Wrapper/Wrapper';
import { getAllUsersRequest } from '../../redux/reducers/users/users';

const AllUsers = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState({});
    const { usersList } = useSelector((state) => state?.users);

    useEffect(() => {
        // get all users
        // eslint-disable-next-line no-console
        console.log('Start get all users');
        dispatch(getAllUsersRequest());
    }, [dispatch]);

    return (
        <Wrapper>
            <h4>All users page</h4>
            <br />
            <br />
            {usersList && Object.values(usersList)?.length > 0 ? (
                <ul>
                    {Object.values(usersList)?.map((user) => {
                        const { _id, username } = user;

                        return (
                            <React.Fragment key={_id}>
                                <List>
                                    <ListItem>{username}</ListItem>
                                </List>
                                <br />
                            </React.Fragment>
                        );
                    })}
                </ul>
            ) : null}
        </Wrapper>
    );
};

export default AllUsers;
