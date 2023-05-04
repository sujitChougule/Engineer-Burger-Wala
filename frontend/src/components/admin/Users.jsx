import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai'
import me from "../../assets/founder.png"
const Users = () => {
  const arr=[1,2,3,4];

  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Payment Method</th>
                        <th>Since</th>                        
                    </tr>
                </thead>

                <tbody>
                    {arr.map(i=>(
                    <tr>
                    <td>#skfjvnslfnv</td>
                    <td>Sujit</td>
                    <td>
                      <img src={me} alt='user'/>
                    </td>
                    <td>Admin</td> 
                    <td>{"24-23-2023"}</td>                       
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

export default Users