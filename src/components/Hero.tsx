export const Hero = () => {
    return (
        <section id="home" className="min-h-[85vh] flex items-center justify-center text-center pt-20">
            <div className="container px-6" data-aos="fade-up">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                    Salut, je suis <br /><span className="text-primary">GBASSI Jules-Christ</span>
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                    Développeur Fullstack passionné par la création d'expériences web modernes, performantes et intuitives.
                    Spécialisé en React, Laravel et solutions Cloud.
                </p>
                <a
                    href="#projects"
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Voir mes réalisations
                </a>
            </div>
        </section>
    );
};
