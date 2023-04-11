import React from 'react';

const AboutMe = () => {
    return (
      <div className='position-relative container d-flex m-2'>
        <img src={require('../../assets/imgs/tai6.jpg')} alt='Tai Disla profile pic' className='col-4 rounded'></img>
        <p className='p-4'>
        My name is Tai Disla, I am a New York City native with a Bachelor’s Degree in Urban Studies (with a focus in Design & Planning) and Minor in Art from San Diego State University.

        I am meticulously detail oriented and aspire to create and design functional spaces. I also love to learn and am constantly looking for ways to up my game: learning new programs, practicing coding, keeping up to date with design trends and new tech, reading self-help books as well as listening to podcast.

        In my free time you will most likely find me exploring taking photos. Photography is something I have been doing since a kid and is a true passion of mine, my happy place is traveling and taking pictures. I also love to hangout with my little brother, visit galleries and museums, be in nature and generally getting lost in a new place.

        I am open to new opportunities both within Design & Architecture as well as within technology.
        </p>
      </div>
    );
  };
  
  export default AboutMe;