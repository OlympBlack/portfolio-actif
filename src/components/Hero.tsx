import { useRef } from "react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { toolsList } from "@/data/portfolio";

export const Hero = () => {
    const sectionRef = useRef(null);

    // Split tools into 3 rings
    const innerRing = toolsList.slice(0, 5);
    const middleRing = toolsList.slice(5, 10);
    const outerRing = toolsList.slice(10, 15);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden relative"
        >
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="container px-4 md:px-6 z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left space-y-6" data-aos="fade-right">
                        <div className="inline-block px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm font-medium border border-border mb-2 backdrop-blur-sm">
                            👋 Bienvenue sur mon portfolio
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight">
                            Salut, je suis <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                                GBASSI Jules-Christ
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Développeur Fullstack passionné par la création d'expériences web modernes, performantes et intuitives.
                            Spécialisé en <strong className="text-foreground">React</strong>, <strong className="text-foreground">Laravel</strong> et solutions <strong className="text-foreground">Cloud</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                            >
                                Voir mes réalisations
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-card text-foreground border border-input px-8 py-3.5 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                            >
                                Me contacter
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Orbiting Animation */}
                    <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100 transform-gpu" data-aos="fade-left">
                        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background/5 pb-10 sm:pb-0">

                            {/* Central Image */}
                            <div className="relative z-10 p-2 bg-card rounded-full border border-border shadow-2xl">
                                <img
                                    src="/images/moi.png"
                                    alt="Profile"
                                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover bg-secondary"
                                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150?text=JG'; }}
                                />
                                <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background animate-pulse" />
                            </div>

                            {/* Inner Ring */}
                            <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={20} radius={80}>
                                {innerRing.map((tool, idx) => (
                                    <div key={idx} className="bg-card p-1.5 rounded-full border border-border shadow-sm" title={tool.name}>
                                        <img src={tool.icon} alt={tool.name} className="size-full object-contain" />
                                    </div>
                                ))}
                            </OrbitingCircles>

                            {/* Middle Ring */}
                            <OrbitingCircles className="size-[40px] border-none bg-transparent" radius={130} duration={30} delay={10} reverse>
                                {middleRing.map((tool, idx) => (
                                    <div key={idx} className="bg-card p-2 rounded-full border border-border shadow-sm" title={tool.name}>
                                        <img src={tool.icon} alt={tool.name} className="size-full object-contain" />
                                    </div>
                                ))}
                            </OrbitingCircles>

                            {/* Outer Ring */}
                            <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={40} delay={20}>
                                {outerRing.map((tool, idx) => (
                                    <div key={idx} className="bg-card p-2 rounded-full border border-border shadow-sm" title={tool.name}>
                                        <img src={tool.icon} alt={tool.name} className="size-full object-contain" />
                                    </div>
                                ))}
                            </OrbitingCircles>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
