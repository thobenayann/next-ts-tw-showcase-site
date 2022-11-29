function Video() {
  const videos = {
    autoplay: [
      {
        id: 1,
        title: 'Vidéo auto play',
        url: 'https://mdbootstrap.com/img/video/Lines.mp4',
        props: { autoPlay: true, loop: true, muted: true }
      }
    ],
    iframe: [
      {
        id: 1,
        title: 'Vidéo Iframe',
        url: 'https://www.youtube.com/embed/v64KOxKVLVg',
        props: { allowFullScreen: true }
      }
    ]
  }

  return (
    <>
      {/* AUTOPLAY */}
      {videos.autoplay.map((video) => (
        <section key={video.id}>
          <div className="p-4 md:h-[70vh] flex flex-col items-center justify-center mb-20">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{video.title}</h1>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-2 rounded-lg shadow-xl max-w-3xl bg-neutral">
              <div className="aspect-w-16 aspect-h-9">
                <video src={video.url} {...video.props}></video>
              </div>
            </div>
          </div>
          <div className="divider mt-0"></div>
        </ section>
      ))}
      {/* IFrame */}
      {videos.iframe.map((video) => (
        <section key={video.id}>
          <div className="p-4 md:h-[70vh] flex flex-col items-center justify-center mb-20">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{video.title}</h1>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-2 rounded-lg shadow-xl max-w-3xl bg-neutral">
              <iframe
                className="w-full h-full aspect-video"
                src={video.url}
                {...video.props}
              ></iframe>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Video;