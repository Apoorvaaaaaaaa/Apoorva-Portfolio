import { TextAnimate } from "@/components/magicui/text-animate";

export const AboutSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              Holla amigos!
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            About Me
          </h2>
          <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-white/60 mt-4">
               Hey, I&apos;m Apoorva Das. 
              </p>

          <div className="max-w-6xl mt-20 sm:mt-10 text-center">
            <div className="leading-10 font-light font-host-grotesk lg:text-2xl sm:text-lg md:text-xl tracking-wide">
              <TextAnimate animation="blurInUp" by="word" duration={3}>
                a developer who enjoys building clean, functional web experiences. I’ve delivered projects, contributed to open source, and love learning by breaking prod
               and fixing it.
                Lately, I&apos;ve been exploring the world of Web3 — it’s overwhelming at times, but the way Solana works has genuinely 
                sparked my curiosity. Still early in the journey, but I’m diving in, 
                one concept at a time.
                I&apos;m big on technology that moves the world forward, and when I’m not coding, I’m probably reading up on art, watching yt or just sleeping. 
                I believe mixing logic with creativity is where the real magic happens.
                Open to freelance, collabs, or just chatting about cool ideas.
                Lets build and learn together.
              </TextAnimate>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
