import videojs from "video.js";
import "videojs-contrib-ads";
import "videojs-ima";

// * player container
const container = document.createElement("video");
container.id = "sec-player";
container.className = "video-js";
container.classList.add("vjs-controls-enabled");
container.classList.add("vjs-theme-city");

// * player source
const mp4 = document.createElement("source");
mp4.src = "//vjs.zencdn.net/v/oceans.mp4";
mp4.type = "video/mp4";
container.append(mp4);
document.body.appendChild(container);

var options = {
  controls: true,
  //autoplay: "muted",
  preload: "auto",
  //poster: "https://placehold.co/600x400",
  //aspectRatio: "16:9",
};

export const player = videojs("sec-player", options, function onPlayerReady() {
  videojs.log("Your player is ready!");
  // this.volume(0.5)
});

player.ready(function () {
  this.addClass("my-example");
});

player.on("ended", function () {
  setTimeout(() => {
    console.warn("player disposed!");
    // this.dispose();
  }, 1000);
});

console.log(videojs.getPlayers());

const imaOptions = {
  autoPlayAdBreaks: false,
  adTagUrl:
    "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=",
};

player.ima(imaOptions);
