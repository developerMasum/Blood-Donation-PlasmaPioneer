import UserCards from '@/components/Dashboard/User/UserCards';
import { UserChart } from '@/components/Dashboard/User/UserChart';
import React from 'react';

const UserPage = () => {
    return <div>
        <UserCards/>
        <UserChart/>
    </div>;
};

export default UserPage;