import { TextAnimate } from "@/components/magicui/text-animate";

export const AboutSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
             Alright, let me introduce myself and my art.
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
                A full-stack developer who builds clean, scalable, and intelligent digital experiences — and learns fastest by breaking things, then figuring out exactly why they broke. I&apos;ve shipped end-to-end products, contributed to open source, and thrive in the space where debugging becomes discovery.
                Lately, I&apos;ve been deep in AI-driven development — architecting with LLMs, exploring prompt engineering, and building conversational systems that feel less like software and more like a dialogue. It&apos;s where I see the future heading, and I want to be building it, not just watching it happen.
                I&apos;m drawn to technology with real-world impact — systems that scale, interfaces that feel effortless, and ideas that solve genuine problems. Beyond the screen, I&apos;m usually exploring art, falling down YouTube rabbit holes, or simply recharging for the next build.
                I believe the sharpest work happens where engineering precision meets creative instinct — where logic doesn&apos;t limit imagination, it sharpens it.
                Open to freelance work, high-impact collaborations, or conversations about ideas worth building. Let&apos;s create something that matters.
              </TextAnimate>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
