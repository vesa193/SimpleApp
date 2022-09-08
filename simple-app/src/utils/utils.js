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

const navigateTo = (navigate, path, isReplaceRoute = false) => {
    navigate(path, isReplaceRoute && { replace: true });
};

export { getLocalAccessToken, getLocalRefreshToken, getUserData, navigateTo };
