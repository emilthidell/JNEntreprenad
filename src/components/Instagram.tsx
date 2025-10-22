import Instafeed from 'instafeed.js';

const Instagram = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Instagram Feed
        </p>
         <div id="instafeed"></div>

          <script type="text/javascript">
            var feed = new Instafeed({
              accessToken: "your-token",
            });
            feed.run();
          </script>
      </div>
    </footer>
  );
};

export default Instagram;
