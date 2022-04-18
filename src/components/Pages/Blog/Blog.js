import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-4'>Question & Answers</h1>
            <hr className='w-75 mx-auto'/>

            <div className="row">
                <div className="col-md-12">
                    <h5>1.Difference between authorization and authentication?</h5>
                    <p><strong>Ans:</strong><br /> Authorization is the process of allow someone to do something.Authorization is the way to check if the user has permission to use resource or not.Authorization defines  what type of information  user can access.Authorization requires the user's security level.It data prifided through the access token.Permission  cannot be changed by the user only owner of system can only be change.</p>
                    <p>Authentication is the process of identifying a user to provide access to a system.It performed before the authorization by system .Authentication requires user information like user name, password , email etc.By using authentication user and server are verified</p>
                </div>
                <div className="col-md-12">
                    <h5>2.Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p><strong>Ans:</strong><br /> I using firebase  because firebase provides group of services .Firebase allows us to store data in a formate similar to json .Also firebase give us authentication and authorization services.The documentation of firebase is so  easy to understand . Thats why we use firebase. </p>
                    <p> <b>Other Options that I used to implement authentication:</b><br />
                    i.Realtime Database <br />
                    ii.Hosting <br />
                    iii.Firestore database
                
                     </p>
                </div>
                <div className="col-md-12">
                    <h5>3.What other services does firebase provide other than authentication</h5>
                    <p><strong>Ans:</strong><br /> Some other features provided by firebae are given below: <br />
                    i. <strong>Cloud messaing: </strong> Deliver and reveive messages in more reliable  way <br />
                    ii. <strong>Hosting: </strong> Deliver web content faster <br />
                    iii. <strong>Realtime Database: </strong> Store data in realtime<br />
                    iv. <strong>Storage </strong>:Storage for storing file  <br />
                    iv. <strong>Text Lab </strong>:Test instead of user <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;