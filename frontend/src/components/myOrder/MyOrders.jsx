import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
const MyOrders = () => {

    const arr=[1,2,3,4];
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Qty</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>Action</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#skfjvnslfnv</td>
                        <td>Processing</td>
                        <td>23</td>
                        <td>₹{2329}</td> 
                        <td>COD</td>                       
                        <td>
                            <Link to={`/order/${"scdsksc"}`}><AiOutlineEye/></Link>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    {arr.map(i=>(
                    <tr key={i}>
                        <td>#skfjvnslfnv</td>
                        <td>Processing</td>
                        <td>23</td>
                        <td>₹{2329}</td> 
                        <td>COD</td>                       
                        <td>
                            <Link to={`/order/${"scdsksc"}`}><AiOutlineEye/></Link>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders