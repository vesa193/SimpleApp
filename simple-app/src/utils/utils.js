const getLocalAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken || null;
};

const getLocalRefreshToken = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken || null;
};

const getUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || null;
};

export { getLocalAccessToken, getLocalRefreshToken, getUserData };
