import React from 'react';
import { Accordion } from 'react-bootstrap';
import picture from '../../Images/question-mark.jpg'

const Blogs = () => {
    return (
        <div>
            <div className='w-75 mx-auto mt-5 mb-4'>
                <h2 className='text-center'>Q/A: </h2>
                <div className='row'>
                    <div className='col-12 col-lg-6 d-flex justify-content-center'>
                        <img style={{ height: '600px' }} className='img-fluid' src={picture} alt="" />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <h5>1. How will you improve the performance of a React Application?</h5></Accordion.Header>
                                <Accordion.Body >

                                    1.We can keep the Components state local to improve the perfomance in react

                                    2. Monitoring react components to prevent the re renders.

                                    3. Using dynamic import splitting code in react.

                                    4. Optimize picture to load images in quick time.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5>  2. What are the different ways to manage a state in a React application?</h5></Accordion.Header>
                                <Accordion.Body>
                                    There are 4 kinds of ways to manage a state in react app.

                                    1.Local state: ocal state is data we manage in one or another component.

                                    2. global state: Global state is data we manage across multiple components.

                                    3.Server state: It comes from another server that should be integrated with thr UI state.

                                    4. URL state: The data which are not exist in our url including pathnmae and querry parameters

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h5>  3.How does prototypical inheritance work?</h5></Accordion.Header>
                                <Accordion.Body>
                                    A prototype is a working object instance. When we read a property from object and it is missing, javascript takes it automatically from the prototype. This is called prototypal inheritance. In order to get and set the Prototype of an object, we use Object, getPrototypeOf.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h5>  4. What is a unit test? Why should write unit tests?</h5></Accordion.Header>
                                <Accordion.Body>
                                    Unit tests are the tests which are done by the developers before deploying any application. it is done by the developers because before deploying the application developers want to check that the application is working as there expectation or not.
                                    We should run unit test because it allows us to think actually what has to be done in the application. if we dont write the test maybe the application would not work appropriately and will make bad user experience.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h5>  5. Why we do not set the state directly in React.?</h5></Accordion.Header>
                                <Accordion.Body>
                                    We should not update the state directly. Because if we try to set the state directy as a example(products=[]) , then it wont re render the component. We need to use setState (setProducts) because it schedules an update to a component's state object. If the state changes the component then responds by re rendering.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;