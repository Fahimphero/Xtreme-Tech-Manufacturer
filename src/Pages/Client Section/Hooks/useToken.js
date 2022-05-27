import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log(user);
        const email = user?.user?.email;
        const name = user?.user?.displayName;

        const currentUser = { email: email, user: name };
        if (email) {
            fetch(`http://localhost:5000/userinfo/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    // localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token, setToken];
}

export default useToken;