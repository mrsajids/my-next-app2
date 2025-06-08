"use client";

import { use } from "react";

const ViewUser = ({ params }) => {
    const data = use(params); // ✅ unwrap the Promise

    console.log(data.users);
    // const { userid } = p//arams.users;
    return (
        <div>
            userid : {data.users}
        </div>
    )
}

export default ViewUser
