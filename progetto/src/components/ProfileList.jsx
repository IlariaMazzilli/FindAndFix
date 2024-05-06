import React from 'react';
import ProfileCard from './ProfileCard';
import electricianImage from '../images/elettricista.jpg';
import gardenerImage from '../images/giardiniere.jpg';
import painterImage from '../images/imbianchino.jpg';
import interiorDesignerImage from '../images/interiorDesigner.jpg';
import locksmithImage from '../images/serramentista.jpg';
import moverImage from '../images/traslocatore.jpg';
import '../myStyles.css'; 


const ProfileList = () => {
    
  const profiles = [
    { name: 'Mario Rossi', image: electricianImage, price:'300€', rating: 4.5, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius enim porttitor sagittis commodo. Sed interdum pellentesque porta. Etiam sodales lacus in volutpat elementum. Nam sed sem id libero elementum pellentesque eu eget nibh. Aenean volutpat viverra lorem, nec lobortis sapien fringilla sit amet. Donec sed augue posuere, interdum nisl vel, posuere nunc. Praesent et euismod ante, vitae aliquet.'},
    { name: 'Giuseppe Verdi', image: gardenerImage, price:'250€', rating: 3.5, description:'Sed fringilla nunc mauris, et laoreet risus vulputate rutrum. Suspendisse egestas nisl nisi, ut sagittis odio placerat id. Aenean lacinia risus in nisi feugiat bibendum. Nunc sed elit orci. Pellentesque accumsan est ut orci cursus, a fringilla diam fringilla. Sed viverra id orci ac facilisis. Donec scelerisque est sem, eget convallis diam imperdiet suscipit. Etiam quis tellus vitae orci auctor imperdiet.' },
    { name: 'Francesco Bianchi', image: painterImage, price:'180€', rating: 4, description:'Mauris placerat maximus arcu, ut ultrices purus ultrices at. Ut aliquet felis nec dui auctor dignissim. Phasellus urna eros, placerat et egestas nec, volutpat a lorem. Fusce augue dui, lacinia ac finibus in, volutpat a libero. Nunc pretium tortor elit, eget facilisis arcu dapibus a. Pellentesque ante purus, viverra sit amet maximus vel, molestie in ipsum. Morbi ut elementum est. Aenean ligula ligula, porta vel nibh feugiat, volutpat ultricies ipsum.'},
    { name: 'Lidia Novara', image: interiorDesignerImage, price:'684€', rating: 4.5, description: 'Pellentesque malesuada, dolor nec suscipit tempor, metus sapien imperdiet libero, nec efficitur ex dolor nec massa. Curabitur porta finibus mauris, at hendrerit elit ornare nec. Phasellus vitae eros sapien. Donec ut lorem suscipit, fermentum justo id, interdum metus. Ut quis commodo dui. In sed commodo leo, vitae ultricies magna. Phasellus enim ante, blandit ut augue ac, porta euismod massa. Praesent felis mi, blandit vitae vehicula eu, congue ut tellus.' },
    { name: 'Pasquale Dubai', image: locksmithImage, price:'745€', rating: 5, description:'Maecenas iaculis laoreet lectus, quis ultrices enim luctus a. Vestibulum sapien justo, cursus non tincidunt vel, feugiat sed dolor. Pellentesque et nunc rutrum, gravida neque vitae, accumsan ipsum. Nullam eros augue, interdum ac dapibus a, faucibus eu arcu. Integer aliquet diam eget eleifend viverra. Nullam velit urna, sollicitudin a magna et, sagittis volutpat justo. Donec non cursus nisi, vitae pretium massa. In hac habitasse platea dictumst.' },
    { name: 'Sylvia Darqua', image: moverImage, price:'74€', rating: 2.5, description:'Etiam volutpat dictum neque eu facilisis. Nulla id erat ligula. In hac habitasse platea dictumst. Morbi condimentum dignissim risus sed finibus. Curabitur a iaculis ante, sit amet tempor quam. Aenean fringilla magna diam, ut finibus eros rhoncus eu. Mauris auctor posuere lorem vitae elementum. Integer quis condimentum purus. Cras ut quam sed augue dignissim consectetur sed et est.' },
  ];

  const handleContact = (name) => {
    alert(`Hai contattato ${name}!`); // O qualsiasi altra logica di contatto
  };


  return (
    <div className="container">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          image={profile.image}
          description={profile.description}
          rating={profile.rating}
          pricing={profile.price}
          onContact={() => handleContact(profile.name)}
        />
      ))}
    </div>
  );
};

export default ProfileList;
