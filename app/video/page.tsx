function Video() {
  return (
    <div className="p-4 md:h-[80vh] flex flex-col items-center justify-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Vidéo auto play</h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-2 rounded-lg shadow-xl max-w-3xl bg-neutral">
        <div className="aspect-w-16 aspect-h-9">
          <video src="https://mdbootstrap.com/img/video/Lines.mp4" autoPlay loop muted></video>
        </div>
      </div>
    </div>
  )
}

export default Video;