import React from 'react'
import InstagramFeed  from 'react-instagram-nb'
import 'react-instagram-nb/dist/index.css'

const Instagram = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Instagram Feed
        </p>
        <InstagramFeed token="your_access_token"  counter="6"/>  
      </div>
    </footer>
  );
};

export default Instagram;
