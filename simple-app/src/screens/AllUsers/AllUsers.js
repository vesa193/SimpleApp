import { List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import { getAllUsers } from '../../lib/api';

const AllUsers = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    // get all users
    getAllUsers()
      .then((res) => {
        setUsers(res?.data);
      })
      .catch((err) => {
        const error = new Error(err.message);
        return error;
      });
  }, []);

  return (
    <Wrapper>
      <h4>All users page</h4>
      <br />
      <br />
      {users && Object.values(users)?.length > 0 ? (
        <ul>
          {Object.values(users)?.map((user) => {
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
