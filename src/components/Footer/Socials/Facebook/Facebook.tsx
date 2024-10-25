export default function Facebook() {
  return (
    <div>
      {/* <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Froverredovisning.se&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="130"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      /> */}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v21.0"
      ></script>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/roverredovisning.se"
        data-tabs=""
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/roverredovisning.se"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/roverredovisning.se">Rovér Redovisning</a>
        </blockquote>
      </div>
    </div>
  );
}
