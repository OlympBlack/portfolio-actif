import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';

export const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Projet non trouvé</h2>
                <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <button onClick={() => navigate(-1)} className="mb-8 flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <i className="fas fa-arrow-left"></i> Retour
            </button>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div data-aos="fade-right">
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-secondary mb-6">
                        <img src={project.images[0]} alt={project.title} className="w-full h-auto" />
                    </div>
                    {project.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-4">
                            {project.images.map((img, idx) => (
                                <div key={idx} className="rounded-lg overflow-hidden border border-border cursor-pointer hover:opacity-80">
                                    <img src={img} alt={`${project.title} ${idx + 1}`} className="w-full h-20 object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div data-aos="fade-left">
                    <h1 className="text-4xl font-bold mb-4 text-foreground">{project.title}</h1>
                    <p className="text-primary text-lg mb-6 font-medium">{project.description}</p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-8">
                        <h3 className="font-semibold mb-4 text-foreground">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 mb-8">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                <i className="fas fa-external-link-alt mr-2"></i> Voir le site
                            </a>
                        )}
                        {project.links.code && (
                            <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold text-center hover:bg-secondary/80 transition-colors border border-border">
                                <i className="fab fa-github mr-2"></i> Code Source
                            </a>
                        )}
                        {project.links.api && (
                            <a href={project.links.api} target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-orange-700 transition-colors shadow-lg">
                                <i className="fas fa-server mr-2"></i> API / Backend
                            </a>
                        )}
                        {project.links.design && (
                            <a href={project.links.design} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors shadow-lg">
                                <i className="fab fa-figma mr-2"></i> Maquette
                            </a>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 bg-card rounded-lg border border-border">
                                <div className="font-bold text-xl text-primary mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-foreground">
                        <h3 className="text-xl font-bold mb-3 text-foreground">À propos du projet</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {project.fullDescription}
                        </p>

                        <h3 className="text-xl font-bold mb-3 text-foreground">Fonctionnalités clés</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-muted-foreground">
                                    <i className="fas fa-check text-green-500 mt-1 mr-3 shrink-0"></i>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
