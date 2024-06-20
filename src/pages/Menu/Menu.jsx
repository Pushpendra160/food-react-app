import React, { useEffect, useState } from 'react';
import './menu.css'; 
import MenuCard from '../../components/Menu-card/MenuCard';
const Menu = () => {
 
  const feed = [
    {
        "name": "Hamburger",
        "price": "200",
        "image": '/assets/burger.jpeg'
    },
    {
        "name": "Fries",
        "price": "100",
        "image": '/assets/fries.jpeg'
    },
    {
        "name": "Coke",
        "price": "50",
        "image": '/assets/coke.jpeg'
    },
    {
        "name": "Pepsi",
        "price": "50",
        "image": '/assets/pepsi.jpeg'
    }
  ];
  // const [feed, setFeed] = useState([]);

  // useEffect(() => {
  //   const fetchFeed = async () => {
  //     try {
  //       const response = await fetch('../../data/feeds.json');
  //       const data = await response.json();
  //       setFeed(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching feed data:', error);
  //     }
  //   };

  //   fetchFeed();
  // }, []);
  return (
    <div className='menu-content'>
      <div className='menu-cards'>
        {feed.map((item) => (
          <MenuCard key={item.name} {...item} /> 
        ))}
      </div>
    </div>
   
  );
};

export default Menu;