import React from 'react'
import { Link } from 'react-router-dom'
import {Doughnut} from "react-chartjs-2"
import {Chart as ChertJS, Tooltip, ArcElement,Legend} from "chart.js"
import Loader from '../layout/Loader';

ChertJS.register(Tooltip, ArcElement,Legend);

const loading =true;
const Box=({title,value})=>(
    <div>
        <h3>
            {title=== "Income" && "₹"}
            {value}
        </h3>
        <p>{title}</p>
    </div>
)
const Dashboard = () => {


    const data={
        labels:["Prepairing", "Shipped","Delivered"],
        datasets:[
            {
                label:"# of orders",
                data: [2,3,4],
                backgroundColor:["rgba(150,63,176,0.1)","rgba(78,63,176,0.2)","rgba(156,0,60,0.3)"],
                borderColor:["rgb(150,63,176)","rgb(78,63,176)","rgb(156,0,60)"],
                borderWidth:[1]
            }
        ]
    }


  return (
    <section className='dashboard'>
        {
            loading===false ?(<main>
            <article>
                <Box value={232} title="Users"/>
                <Box value={40} title="Orders"/>
                <Box value={20302} title="Income"/>
            </article>
            <section>
                <div>
                    <Link to="/admin/orders">View Orders</Link>
                    <Link to="/admin/users">View Users</Link>

                </div>
                <aside>
                    <Doughnut data={data}/>
                </aside>
            </section>
        </main>) :<Loader/>
        }
    </section>
  )
}

export default Dashboard