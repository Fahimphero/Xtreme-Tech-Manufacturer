// import React, { useEffect, useState } from 'react';

// const UseClientProducts = (props) => {

//     const email = props.email;
//     console.log(props.email)
//     const [clientParts, setClientParts] = useState([])

//     const url = `http://localhost:5000/clientparts/${email}`
//     useEffect(() => {
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setClientParts(data));

//     }, [])

//     return [clientParts, setClientParts];
// };

// export default UseClientProducts;