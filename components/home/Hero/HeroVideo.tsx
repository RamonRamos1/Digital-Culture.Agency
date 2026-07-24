"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export default function HeroVideo() {

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)


  function handlePlay(){

    if(!videoRef.current) return


    if(videoRef.current.paused){

      videoRef.current.play()
      setIsPlaying(true)

    }else{

      videoRef.current.pause()
      setIsPlaying(false)

    }

  }


  return (

    <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-dc-border
        bg-dc-card
        shadow-2xl
        aspect-video
        max-h-[320px]
        "
>
      <video
        ref={videoRef}
        className="
          h-full
          w-full
          object-cover
        "
        poster="/images/hero-video-cover.webp"
        preload="metadata"
      >

        <source
          src="/videos/hero-video.mp4"
          type="video/mp4"
        />

      </video>


      <button
        type="button"
        onClick={handlePlay}
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/10
          backdrop-blur-md
          transition
          hover:bg-white/20
        "
        aria-label={
          isPlaying
          ? "Pausar video"
          : "Reproducir video"
        }
      >

        {
          isPlaying
          ?
          <Pause size={28}/>
          :
          <Play size={28}/>
        }

      </button>


    </div>

  )
}