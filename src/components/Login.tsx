function Login(){
    const handleLogin = () => {
        window.location.href = "auth/google";
};
    
        return(
            <div>
                <button onClick={handleLogin}>Login with Google</button>
            </div>
        );
    }