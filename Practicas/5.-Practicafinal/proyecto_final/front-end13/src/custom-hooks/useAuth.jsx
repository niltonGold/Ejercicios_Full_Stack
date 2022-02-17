function useAuth() {

    return sessionStorage.getItem('token') ? true : false;
    // const token = sessionStorage.getItem('token')

}

export default useAuth;