const videosElement = document.querySelector(".videos");

const init = async () => {
  const videos = await App.getVideos([
    "https://youtu.be/C1kC0I1SfVM",
    "https://youtu.be/Drd5BbdgsUo",
    "https://youtu.be/decDIkDbS3Q",
    "https://youtu.be/bCopvhn_Th4",
    "https://youtu.be/UDx4HAeB5ck",
    "https://youtu.be/4Qxr2DPUCmg",
    "https://youtu.be/HnY9LKxk5gM",
    "https://youtu.be/hoVNrWPX_qQ",
    "https://youtu.be/aaoPUwhlJlw"
  ]);
init();
