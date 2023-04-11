import React from 'react';
import ProjectCard from '../ProjectCard'

const Portfolio = () => {
    const projects = [
        {
            id: 0,
            image: '',
            name: 'Team Profile Generator',
            description: 'Generate your company\'s team profile page using npm inquirer.',
            github: 'https://github.com/taicedtea/Team-Profile-Generator',
        },
        {
            id: 1,
            name: 'Weather Checker',
            description: 'Check local weather using OpenWeather API',
            github: 'https://github.com/taicedtea/Weather-Checker',
            liveSite: 'https://taicedtea.github.io/Weather-Checker/'
        },
        {
            id: 2,
            name: 'Test3',
            description: '',
            github: '',
            liveSite: ''
        },
    ]
    return (
        <div className>
            <h2>My Projects</h2>
            <div id='projectContainer'>
                <ProjectCard projects={projects} />
            </div>
        </div>
    )
}

export default Portfolio;