const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.accessToken || null;
}

const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user?.refreshToken || null;
}

const getUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user || null;
}

export { getLocalAccessToken, getLocalRefreshToken, getUserData };