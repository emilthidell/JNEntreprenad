import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Instagram Feed
        </p>
        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" />
      </div>
    </footer>
  );
};

export default Instagram;
