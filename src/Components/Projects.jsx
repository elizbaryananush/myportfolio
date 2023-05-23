import React from 'react'
import image1 from '../assets/image/i1.jpg'
import image2 from '../assets/image/i2.jpg'
import image3 from '../assets/image/i3.jpg'
import image4 from '../assets/image/i4.jpg'
import image5 from '../assets/image/i5.jpg'


function Projects() {
    let pressed = false;
    let x;
    let startx;
    let section;
    let inside;
    let left = 100;

    window.addEventListener('mouseup', (e) => {
        pressed = false
    })
    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <div className='section'>
                <div className='projects-cart'>
                    <div className='inside' id="inside">
                        <div className="project">
                            <div className="top">
                                <div className="round"></div>
                                <div className="round"></div>
                                <p>2020-04-02-index.html</p>
                            </div>
                            <img src={image1} />
                            <div className="text">
                                <h1>Plantarium</h1>
                                <p>Website for selling flowers, created using React, React-Router, Redux (Toolkit), and SCSS. Please do not judge harshly.</p>
                                <a className='btn' target='_blank' href="https://plantarium.netlify.app">view</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="top">
                                <div className="round"></div>
                                <div className="round"></div>
                                <p>2020-04-02-index.html</p>
                            </div>
                            <img src={image2} />
                            <div className="text">
                                <h1>Personal Portfolio</h1>
                                <p>An example of a personal portfolio website created using React, React-Router, and SCSS. Please be kind with your judgment</p>
                                <a className='btn' target='_blank' href="https://portfolioexamplean.netlify.app">view</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="top">
                                <div className="round"></div>
                                <div className="round"></div>
                                <p>2020-04-02-index.html</p>
                            </div>
                            <img src={image3} />
                            <div className="text">
                                <h1>Pokemons</h1>
                                <p>Podiatry for pokemons, created using Pokemon API. Please be kind with your judgment.</p>
                                <a className='btn' target='_blank' href="https://pokemonapifromme.netlify.app">view</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="top">
                                <div className="round"></div>
                                <div className="round"></div>
                                <p>2020-04-02-index.html</p>
                            </div>
                            <img src={image4} />
                            <div className="text">
                                <h1>Learn Programming</h1>
                                <p>A website for learning programming using only HTML, CSS, and Bootstrap. Please be kind with your judgment.</p>
                                <a className='btn' target='_blank' href="https://learnprograminggg.netlify.app">view</a>
                            </div>
                        </div>
                        <div className="project">
                            <div className="top">
                                <div className="round"></div>
                                <div className="round"></div>
                                <p>2020-04-02-index.html</p>
                            </div>
                            <img src={image5} />
                            <div className="text">
                                <h1>aNetwork</h1>
                                <p>Developing a social network without security, using React, React Router, Redux, Redux Toolkit, SCSS, and jQuery. Please refrain from judging harshly.</p>
                                <a className='btn' target='_blank' href="https://anetworkam.netlify.app">view</a>
                            </div>
                        </div>
                    </div>
                </div>
                <svg
                    onClick={() => {
                        let projectcart = document.querySelector('.projects-cart')
                        projectcart.scrollLeft -= document.querySelector('.project').offsetWidth + 20
                    }}
                    className='btn left'
                    xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="30" height="30"><path d="M13.422,19.061,8.129,13.768a2.5,2.5,0,0,1,0-3.536l5.293-5.293,2.121,2.122L10.6,12l4.939,4.939Z" /></svg>
                <svg
                    onClick={() => {
                        let projectcart = document.querySelector('.projects-cart')
                        projectcart.scrollLeft += document.querySelector('.project').offsetWidth + 20
                    }}
                    className='btn right'
                    xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="30" height="30"><path d="M11.164,19.061,9.043,16.939,13.982,12,9.043,7.061l2.121-2.122,5.293,5.293a2.5,2.5,0,0,1,0,3.536Z" /></svg>
            </div>
        </div>
    )
}

export default Projects
