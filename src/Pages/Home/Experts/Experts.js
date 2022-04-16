import React from 'react';
import expert1 from '../../../images/expert-1.jpg'
import expert2 from '../../../images/expert-2.jpg'
import expert3 from '../../../images/expert-3.jpg'
import expert4 from '../../../images/expert-4.jpg'
import expert5 from '../../../images/expert-5.jpg'
import expert6 from '../../../images/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Jhankar Mahbub', img: expert1 },
    { id: 1, name: 'Anisur Rahman', img: expert2 },
    { id: 1, name: 'Hasin Haider', img: expert3 },
    { id: 1, name: 'Learn With Sumit', img: expert4 },
    { id: 1, name: 'Stack Larner', img: expert5 },
    { id: 1, name: 'Ali Hasan', img: expert6 }
]
const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='text-success text-center mt-5'>Our Experts </h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;