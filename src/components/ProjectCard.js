import React from 'react';

const styles = {
    card: {
        width: '25%',
        margin: '1.5rem'
    },
};

const ProjectCard = (prop) => {
    return(
        {prop.projects.map((projects) => (
            <div className="card" style={styles.card}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">${projects.name}</h5>
                    <p className="card-text">${projects.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ));
        });
    }

export default ProjectCard;