// import module
import { instagramdl } from '@bochilteam/scraper-instagram'

const data = await instagramdl('https://www.instagram.com/emilthidellvannoort/')
console.log(data) // JSON

const Instagram = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
          
      </div>
    </footer>
  );
};

export default Instagram;
